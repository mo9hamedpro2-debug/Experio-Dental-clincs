import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  getStoredAppointments,
  updateAppointmentStatus,
  updateAppointmentNotes,
  deleteAppointment,
  resetReceptionRecords,
  exportAppointmentsToCSV,
} from '../lib/appointmentStore';
import type { StoredAppointment, AppointmentStatus } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import {
  Lock,
  Unlock,
  Phone,
  MessageCircle,
  Download,
  RotateCcw,
  Search,
  Calendar,
  Clock,
  User,
  AlertCircle,
  FileText,
  Trash2,
  Save,
  LogOut,
  ExternalLink,
} from 'lucide-react';

const RECEPTION_PIN = 'experio2026';
const AUTH_KEY = 'experio_reception_session';

export const ReceptionPortal: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [appointments, setAppointments] = useState<StoredAppointment[]>(() => {
    try {
      if (sessionStorage.getItem(AUTH_KEY) === 'true') {
        return getStoredAppointments();
      }
    } catch {
      // ignore
    }
    return [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | AppointmentStatus>('all');
  const [editingNotes, setEditingNotes] = useState<Record<string, string>>({});
  const [savedNotesAlert, setSavedNotesAlert] = useState<string | null>(null);

  // Load appointments
  const refreshAppointments = () => {
    const list = getStoredAppointments();
    setAppointments(list);
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    // Listen for new submissions from booking form in real-time
    const handleUpdate = () => {
      setAppointments(getStoredAppointments());
    };

    window.addEventListener('experio-appointments-updated', handleUpdate);
    return () => {
      window.removeEventListener('experio-appointments-updated', handleUpdate);
    };
  }, [isAuthenticated]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === RECEPTION_PIN) {
      try {
        sessionStorage.setItem(AUTH_KEY, 'true');
      } catch {
        // ignore
      }
      setIsAuthenticated(true);
      setAppointments(getStoredAppointments());
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem(AUTH_KEY);
    } catch {
      // ignore
    }
    setIsAuthenticated(false);
    setPinInput('');
  };

  const handleStatusChange = (id: string, newStatus: AppointmentStatus) => {
    updateAppointmentStatus(id, newStatus);
    refreshAppointments();
  };

  const handleNotesSave = (id: string) => {
    const note = editingNotes[id] ?? '';
    updateAppointmentNotes(id, note);
    setSavedNotesAlert(id);
    setTimeout(() => setSavedNotesAlert(null), 2500);
    refreshAppointments();
  };

  const handleDelete = (id: string) => {
    if (window.confirm(isRtl ? 'هل أنت متأكد من حذف هذا السجل؟' : 'Are you sure you want to remove this record?')) {
      deleteAppointment(id);
      refreshAppointments();
    }
  };

  const handleReset = () => {
    if (window.confirm(isRtl ? 'إعادة ضبط السجلات للبيانات التوضيحية الافتراضية؟' : 'Reset records to initial sample data?')) {
      resetReceptionRecords();
      refreshAppointments();
    }
  };

  const buildReceptionWhatsAppUrl = (apt: StoredAppointment) => {
    const timeLabel = {
      morning: isRtl ? 'صباحاً (١٠:٠٠ ص – ١:٠٠ م)' : 'Morning (10:00 AM – 1:00 PM)',
      afternoon: isRtl ? 'ظهراً (١:٠٠ م – ٥:٠٠ م)' : 'Afternoon (1:00 PM – 5:00 PM)',
      evening: isRtl ? 'مساءً (٥:٠٠ م – ٩:٠٠ م)' : 'Evening (5:00 PM – 9:00 PM)',
    }[apt.preferredTimePeriod] || apt.preferredTimePeriod;

    let text = '';
    if (isRtl) {
      text = `مرحباً أستاذ(ة) ${apt.patientName}،\nمعكم إدارة الاستقبال بعيادات إكسبيريو لطب الأسنان بلوران.\nبخصوص طلب موعدكم ليوم: ${apt.preferredDate} (${timeLabel})، نود تأكيد حضوركم بالعيادة في ٢٤ شارع شعراوي، أعلى مركز آي سكان، الدور الأول.\nيسعدنا الرد على أي استفسار لديكم.`;
    } else {
      text = `Hello ${apt.patientName},\nThis is Experio Dental Clinics reception in Louran, Alexandria.\nRegarding your appointment request for: ${apt.preferredDate} (${timeLabel}), we would like to confirm your time slot at 24 Shaarawy St, 1st floor above iScan Center.\nPlease let us know if this time suits you well.`;
    }

    // Strip spaces/symbols from patient phone
    let phone = apt.phoneNumber.replace(/[\s\-()]/g, '');
    if (phone.startsWith('01')) {
      phone = '20' + phone.substring(1);
    } else if (phone.startsWith('+20')) {
      phone = phone.substring(1);
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  // Filtered appointments
  const filtered = appointments.filter((apt) => {
    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
    const matchesSearch =
      apt.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.phoneNumber.includes(searchQuery) ||
      (apt.serviceCategory && apt.serviceCategory.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  // KPI stats
  const totalCount = appointments.length;
  const pendingCount = appointments.filter((a) => a.status === 'pending').length;
  const contactedCount = appointments.filter((a) => a.status === 'contacted').length;
  const confirmedCount = appointments.filter((a) => a.status === 'confirmed').length;

  if (!isAuthenticated) {
    return (
      <>
        <SeoHead title={isRtl ? 'دخول بوابة الاستقبال' : 'Reception Portal Access'} />
        <section className="min-h-[75vh] flex items-center justify-center py-16 px-4 bg-[#F8F7F3]">
          <div className="w-full max-w-md bg-white rounded-2xl border border-[#102A43]/15 shadow-md p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-[#EAF4F3] text-[#147D83] flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#147D83]">
                {t.reception.badge}
              </span>
              <h1 className="text-2xl font-semibold text-[#102A43]">
                {t.reception.title}
              </h1>
              <p className="text-xs text-[#667085]">
                {t.reception.pinHelp}
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <label htmlFor="reception-pin" className="block text-xs font-semibold text-[#102A43] mb-1.5">
                  {t.reception.pinPrompt}
                </label>
                <input
                  type="password"
                  id="reception-pin"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="experio2026"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#102A43]/20 text-sm text-[#102A43] focus:border-[#147D83] focus:bg-white transition-colors"
                  autoFocus
                />
                {pinError && (
                  <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{t.reception.pinError}</span>
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="teal"
                size="md"
                className="w-full justify-center"
                icon={<Unlock className="w-4 h-4" />}
              >
                {t.reception.unlockButton}
              </Button>
            </form>

            <div className="pt-2 text-center border-t border-gray-100 text-[11px] text-[#667085]">
              {isRtl
                ? 'عيادات إكسبيريو لطب الأسنان — ٢٤ شارع شعراوي، لوران، الإسكندرية'
                : 'Experio Dental Clinics — 24 Shaarawy St, Louran, Alexandria'}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SeoHead title={isRtl ? 'لوحة تحكم الاستقبال' : 'Reception Dashboard'} />

      {/* Top Header Bar */}
      <section className="bg-white border-b border-[#102A43]/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#147D83]">
                {t.reception.badge} • {t.reception.liveBadge}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#102A43]">
              {t.reception.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#667085]">
              {t.reception.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportAppointmentsToCSV(filtered)}
              icon={<Download className="w-3.5 h-3.5" />}
            >
              {t.reception.exportCSV}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              icon={<RotateCcw className="w-3.5 h-3.5" />}
              title="Reset demo records"
            >
              {t.reception.resetData}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              icon={<LogOut className="w-3.5 h-3.5" />}
              className="text-rose-600 hover:bg-rose-50"
            >
              {isRtl ? 'خروج' : 'Lock'}
            </Button>
          </div>
        </div>
      </section>

      {/* Main Reception Board */}
      <section className="py-8 sm:py-12 bg-[#F8F7F3] min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* KPI Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-[#102A43]/10 shadow-2xs">
              <span className="text-xs text-[#667085] font-medium block">
                {t.reception.statsTotal}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-[#102A43] mt-1 block">
                {totalCount}
              </span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-amber-200 bg-amber-50/40 shadow-2xs">
              <span className="text-xs text-amber-900 font-medium block flex items-center justify-between">
                <span>{t.reception.statsPending}</span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-amber-900 mt-1 block">
                {pendingCount}
              </span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-sky-200 bg-sky-50/40 shadow-2xs">
              <span className="text-xs text-sky-900 font-medium block">
                {t.reception.statsContacted}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-sky-900 mt-1 block">
                {contactedCount}
              </span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 shadow-2xs">
              <span className="text-xs text-emerald-900 font-medium block">
                {t.reception.statsConfirmed}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-emerald-900 mt-1 block">
                {confirmedCount}
              </span>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#102A43]/10 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#667085]">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.reception.searchPlaceholder}
                className="w-full ps-9 pe-3 py-2 text-xs sm:text-sm rounded-lg border border-[#102A43]/20 text-[#102A43] focus:border-[#147D83] focus:bg-white"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {(
                [
                  { id: 'all', label: t.reception.filterAll },
                  { id: 'pending', label: t.reception.filterPending },
                  { id: 'contacted', label: t.reception.filterContacted },
                  { id: 'confirmed', label: t.reception.filterConfirmed },
                  { id: 'cancelled', label: t.reception.filterCancelled },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    statusFilter === tab.id
                      ? 'bg-[#102A43] text-white'
                      : 'bg-[#F8F7F3] text-[#667085] hover:text-[#102A43]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Appointments List */}
          {filtered.length === 0 ? (
            <div className="bg-white rounded-xl border border-[#102A43]/10 p-12 text-center space-y-2">
              <p className="text-sm font-semibold text-[#102A43]">
                {t.reception.noRecordsFound}
              </p>
              <p className="text-xs text-[#667085]">
                {isRtl
                  ? 'جرب تغيير معيار البحث أو اضغط على إعادة ضبط البيانات.'
                  : 'Try adjusting your search criteria or resetting the sample data.'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((apt) => {
                const statusStyles = {
                  pending: 'bg-amber-100 text-amber-800 border-amber-200',
                  contacted: 'bg-sky-100 text-sky-800 border-sky-200',
                  confirmed: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                  cancelled: 'bg-rose-100 text-rose-800 border-rose-200',
                }[apt.status];

                const currentNote =
                  editingNotes[apt.id] !== undefined
                    ? editingNotes[apt.id]
                    : apt.internalNotes || '';

                return (
                  <div
                    key={apt.id}
                    className="bg-white rounded-xl border border-[#102A43]/10 shadow-2xs hover:shadow-xs transition-shadow p-5 sm:p-6 space-y-4"
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-bold text-base sm:text-lg text-[#102A43] flex items-center gap-1.5">
                          <User className="w-4 h-4 text-[#147D83]" />
                          <span>{apt.patientName}</span>
                        </span>
                        {apt.isDemoSample ? (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                            {t.reception.demoBadge}
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            {t.reception.newBadge}
                          </span>
                        )}
                        <span className="text-xs text-[#667085]">
                          • {new Date(apt.createdAt).toLocaleString(isRtl ? 'ar-EG' : 'en-US')}
                        </span>
                      </div>

                      {/* Status Selector */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyles}`}
                        >
                          {apt.status === 'pending' && t.reception.statusPending}
                          {apt.status === 'contacted' && t.reception.statusContacted}
                          {apt.status === 'confirmed' && t.reception.statusConfirmed}
                          {apt.status === 'cancelled' && t.reception.statusCancelled}
                        </span>

                        <select
                          value={apt.status}
                          onChange={(e) =>
                            handleStatusChange(apt.id, e.target.value as AppointmentStatus)
                          }
                          className="text-xs py-1 px-2 rounded-lg border border-[#102A43]/20 bg-gray-50 text-[#102A43] focus:bg-white focus:border-[#147D83]"
                        >
                          <option value="pending">{t.reception.statusPending}</option>
                          <option value="contacted">{t.reception.statusContacted}</option>
                          <option value="confirmed">{t.reception.statusConfirmed}</option>
                          <option value="cancelled">{t.reception.statusCancelled}</option>
                        </select>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="text-xs text-[#667085] block font-medium">
                          {t.reception.phoneLabel}
                        </span>
                        <a
                          href={`tel:${apt.phoneNumber}`}
                          className="font-semibold text-[#147D83] hover:underline flex items-center gap-1.5"
                          dir="ltr"
                        >
                          <Phone className="w-3.5 h-3.5 shrink-0" />
                          <span>{apt.phoneNumber}</span>
                        </a>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs text-[#667085] block font-medium">
                          {t.reception.dateLabel}
                        </span>
                        <span className="text-[#102A43] font-medium flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#147D83] shrink-0" />
                          <span>{apt.preferredDate}</span>
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs text-[#667085] block font-medium">
                          {t.reception.timeLabel}
                        </span>
                        <span className="text-[#102A43] font-medium flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#147D83] shrink-0" />
                          <span>
                            {apt.preferredTimePeriod === 'morning' && t.booking.timeMorning}
                            {apt.preferredTimePeriod === 'afternoon' && t.booking.timeAfternoon}
                            {apt.preferredTimePeriod === 'evening' && t.booking.timeEvening}
                          </span>
                        </span>
                      </div>

                      {apt.serviceCategory && (
                        <div className="space-y-1">
                          <span className="text-xs text-[#667085] block font-medium">
                            {t.reception.serviceLabel}
                          </span>
                          <span className="text-[#147D83] font-medium block truncate">
                            {apt.serviceCategory}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Patient Notes */}
                    {apt.shortNote && (
                      <div className="p-3 rounded-lg bg-[#F8F7F3] border border-[#102A43]/10 text-xs text-[#667085]">
                        <strong className="text-[#102A43] block mb-0.5">
                          {t.reception.patientNotesLabel}:
                        </strong>
                        <p className="italic">"{apt.shortNote}"</p>
                      </div>
                    )}

                    {/* Reception Internal Notes & Action Shortcuts */}
                    <div className="pt-2 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                      {/* Internal Notes Input */}
                      <div className="flex-1 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#667085] shrink-0" />
                        <input
                          type="text"
                          value={currentNote}
                          onChange={(e) =>
                            setEditingNotes({ ...editingNotes, [apt.id]: e.target.value })
                          }
                          placeholder={t.reception.internalNotesLabel}
                          className="w-full text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-[#102A43] focus:border-[#147D83] focus:bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => handleNotesSave(apt.id)}
                          className="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-[#147D83] hover:text-white text-xs font-semibold text-[#102A43] transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                        >
                          <Save className="w-3 h-3" />
                          <span>{t.reception.saveNotes}</span>
                        </button>
                        {savedNotesAlert === apt.id && (
                          <span className="text-[11px] text-emerald-600 font-medium shrink-0 animate-fadeIn">
                            ✓ {isRtl ? 'تم الحفظ' : 'Saved'}
                          </span>
                        )}
                      </div>

                      {/* Direct Patient Outreach Shortcuts */}
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={`tel:${apt.phoneNumber}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#102A43]/20 text-[#102A43] hover:bg-black/5 text-xs font-semibold transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#147D83]" />
                          <span>{t.reception.callPatient}</span>
                        </a>

                        <a
                          href={buildReceptionWhatsAppUrl(apt)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#147D83] text-white hover:bg-[#0E6166] text-xs font-semibold transition-colors shadow-2xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{t.reception.whatsAppPatient}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        <button
                          type="button"
                          onClick={() => handleDelete(apt.id)}
                          className="p-1.5 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Delete record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
