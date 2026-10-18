import type { AppointmentRequest, StoredAppointment, AppointmentStatus } from '../types';

const STORAGE_KEY = 'experio_reception_records_v1';

// Initial preloaded sample requests to illustrate reception dashboard operations
const INITIAL_SAMPLE_APPOINTMENTS: StoredAppointment[] = [
  {
    id: 'exp-demo-01',
    patientName: 'Karim El-Sayed (كريم السيد)',
    phoneNumber: '01012345678',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTimePeriod: 'morning',
    serviceCategory: 'General Dentistry & Preventive Care',
    shortNote: 'Routine checkup and dental scaling before travel.',
    consentGiven: true,
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: 'pending',
    isDemoSample: true,
    internalNotes: 'Reception notified: patient requested morning slot before 12 PM.',
  },
  {
    id: 'exp-demo-02',
    patientName: 'Nourhan Adel (نورهان عادل)',
    phoneNumber: '01298765432',
    preferredDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    preferredTimePeriod: 'evening',
    serviceCategory: 'Cosmetic Dentistry & Aesthetic Solutions',
    shortNote: 'Inquiring about aesthetic smile consultation and shade evaluation.',
    consentGiven: true,
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    status: 'contacted',
    isDemoSample: true,
    internalNotes: 'Called on WhatsApp at 5 PM. Sent consultation guidelines.',
  },
  {
    id: 'exp-demo-03',
    patientName: 'Omar Mansour (عمر منصور)',
    phoneNumber: '01145678901',
    preferredDate: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
    preferredTimePeriod: 'afternoon',
    serviceCategory: 'Dental Implants & Tooth Replacement',
    shortNote: 'Has existing panoramic X-ray taken at iScan downstairs.',
    consentGiven: true,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    status: 'confirmed',
    isDemoSample: true,
    internalNotes: 'Confirmed for 3:30 PM. Advised to bring iScan optical disc.',
  },
];

/**
 * Retrieves all stored appointments from reception storage.
 */
export function getStoredAppointments(): StoredAppointment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Initialize with initial samples
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_APPOINTMENTS));
      return INITIAL_SAMPLE_APPOINTMENTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    // If storage is disabled, return in-memory samples
  }
  return INITIAL_SAMPLE_APPOINTMENTS;
}

/**
 * Saves a new appointment submitted through the booking form.
 */
export function saveNewAppointment(request: AppointmentRequest): StoredAppointment {
  const newAppointment: StoredAppointment = {
    ...request,
    id: `exp-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
    status: 'pending',
    isDemoSample: false,
    internalNotes: '',
  };

  try {
    const current = getStoredAppointments();
    const updated = [newAppointment, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Notify any listening components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('experio-appointments-updated'));
    }
  } catch {
    // Storage fail-safe
  }

  // If a live webhook or API URL is configured in environment, dispatch in background
  const webhookUrl = import.meta.env.VITE_BOOKING_API_URL || import.meta.env.VITE_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAppointment),
      }).catch(() => {
        // Silent background catch
      });
    } catch {
      // Silent catch
    }
  }

  return newAppointment;
}

/**
 * Updates the status of an appointment.
 */
export function updateAppointmentStatus(id: string, status: AppointmentStatus): boolean {
  try {
    const current = getStoredAppointments();
    const index = current.findIndex((a) => a.id === id);
    if (index !== -1) {
      current[index].status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
      window.dispatchEvent(new CustomEvent('experio-appointments-updated'));
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

/**
 * Updates internal reception notes for an appointment.
 */
export function updateAppointmentNotes(id: string, notes: string): boolean {
  try {
    const current = getStoredAppointments();
    const index = current.findIndex((a) => a.id === id);
    if (index !== -1) {
      current[index].internalNotes = notes;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
      window.dispatchEvent(new CustomEvent('experio-appointments-updated'));
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

/**
 * Deletes an appointment from the reception board.
 */
export function deleteAppointment(id: string): boolean {
  try {
    const current = getStoredAppointments();
    const filtered = current.filter((a) => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    window.dispatchEvent(new CustomEvent('experio-appointments-updated'));
    return true;
  } catch {
    // ignore
  }
  return false;
}

/**
 * Resets reception board to initial sample state.
 */
export function resetReceptionRecords(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_APPOINTMENTS));
    window.dispatchEvent(new CustomEvent('experio-appointments-updated'));
  } catch {
    // ignore
  }
}

/**
 * Exports stored appointments as a UTF-8 BOM CSV file for Excel / Google Sheets.
 */
export function exportAppointmentsToCSV(appointments: StoredAppointment[]): void {
  const headers = [
    'ID',
    'Status',
    'Patient Name',
    'Phone Number',
    'Preferred Date',
    'Time Period',
    'Service Category',
    'Patient Notes',
    'Internal Reception Notes',
    'Submission Timestamp',
  ];

  const escapeCSV = (val?: string) => {
    if (!val) return '""';
    const clean = String(val).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const rows = appointments.map((a) => [
    escapeCSV(a.id),
    escapeCSV(a.status),
    escapeCSV(a.patientName),
    escapeCSV(a.phoneNumber),
    escapeCSV(a.preferredDate),
    escapeCSV(a.preferredTimePeriod),
    escapeCSV(a.serviceCategory),
    escapeCSV(a.shortNote),
    escapeCSV(a.internalNotes),
    escapeCSV(a.createdAt),
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `experio_appointments_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
