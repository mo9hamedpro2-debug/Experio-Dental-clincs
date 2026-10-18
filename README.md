# Experio Dental Clinics — Premium Dental Website Concept

A bespoke, production-ready website concept developed for **Experio Dental Clinics**, located in Alexandria, Egypt.

Designed as a presentation proposal for the clinic owner, this project embodies a refined, minimal, luxurious, and reassuring healthcare brand identity with full bilingual English / Arabic localization and complete RTL layout support.

---

## 1. Verified Business Information

| Field | Detail |
| :--- | :--- |
| **Business Name** | Experio Dental Clinics (عيادات إكسبيريو لطب الأسنان) |
| **Location** | 24 Shaarawy Street, above iScan Center, first floor, Louran, Alexandria, Egypt |
| **Mobile & Booking** | `01029720243` / `+20 102 972 0243` |
| **Alexandria Landline**| `03 5852955` / `+20 3 585 2955` |
| **Google Maps** | [Find on Google Maps](https://www.google.com/maps/search/?api=1&query=Experio+Dental+Clinics+24+Shaarawy+Louran+Alexandria) |

> **Transparency Notice:** Business details are preliminary research data. In accordance with professional standards, doctor identities, qualifications, working hours, and treatment listings are clearly marked as placeholders pending official clinic authorization before public release.

---

## 2. Key Pages & Features

- **Home Page (`/`)**:
  - Bespoke typographic wordmark: **EXPERIO** / **DENTAL CLINICS**
  - High-impact editorial hero section with authentic clinical photography
  - Core care philosophy (Patient comfort first, clinical precision, transparent communication)
  - Prospective dental services preview with draft badges
  - 4-step patient journey breakdown
  - Clinic environment & infection control standards
  - Verified NAP and Google Maps integration preview
  - Safe, general FAQ accordion
  - High-converting consultation request CTA

- **About Page (`/about`)**:
  - Clinic introduction and patient care philosophy
  - Focus on anxiety-free, gentle dental care
  - Alexandria clinic setting (Louran, above iScan Center)
  - Credentials & accreditations transparency notice

- **Services Directory (`/services`)**:
  - Filterable by clinical category (Preventive, Aesthetics, Restorative, Surgical, Orthodontics, Endodontics, Periodontics, Pediatric)
  - Prominent clinical assessment disclaimer on all procedures
  - Clear draft status indicators

- **Service Detail Template (`/services/:id`)**:
  - Dynamic route rendering procedure overview, common symptoms/reasons for consultation, procedure steps, and procedure-specific FAQs
  - Direct appointment CTA preselecting the service

- **Our Dentists / Team Page (`/team`)**:
  - Strict compliance banner: *"Meet our dental team — profiles coming soon"*
  - Transparent placeholder cards for Lead Specialist, Implantologist, and Orthodontist
  - Syndicate registration transparency notice

- **Appointment Booking (`/booking`)**:
  - Interactive appointment request form
  - Egyptian phone number validation (local `010/011/012/015` and international `+2010...`)
  - Date validation preventing past dates
  - Time period selection (Morning, Afternoon, Evening)
  - Explicit patient consent checkbox
  - Safe Demo Mode with receipt modal
  - Configurable WhatsApp fallback (`VITE_WHATSAPP_NUMBER`) with prefilled message preview and URL-safe encoding
  - Zero permanent storage of patient medical data in localStorage or third-party trackers

- **Contact & Location (`/contact`)**:
  - Tap-to-call mobile and landline
  - Directions guide for reaching Shaarawy Street, Louran via Tram, Abu Qir Road, or Corniche
  - Direct WhatsApp chat link
  - Opening hours notice (pending official confirmation)

- **FAQ Page (`/faq`)**:
  - Categorized accordion (Appointments, Location, Consultation, General)

- **Privacy & Medical Disclaimer (`/privacy`)**:
  - Complete legal disclosure regarding website concept proposal status, non-collection of sensitive patient health records, and clinical consultation requirements.

- **Custom 404 Page (`*`)**:
  - Polished error page with quick return to homepage.

---

## 3. Bilingual Support & RTL Localization

- **Default Language:** English (`en`).
- **Arabic Localization:** Complete, natural, and idiomatic Arabic (`ar`).
- **Directional Switching:** Dynamic `dir="rtl"` and `dir="ltr"` attribute switching on root `<html>`.
- **Typography:**
  - Modern sans-serif: *Plus Jakarta Sans*
  - Refined editorial display: *Playfair Display*
  - Arabic typography: *Cairo* & *Tajawal*
- **Persistent Selection:** Saved in `localStorage` (`experio_lang_preference`).

---

## 4. Tech Stack

- **Framework:** React 19 + TypeScript
- **Tooling:** Vite 8 (with native bindings configured)
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7 (`react-router-dom`)
- **Icons:** Lucide React
- **SEO & Structured Data:** Schema.org `Dentist` JSON-LD, Open Graph, meta description, `sitemap.xml`, and `robots.txt`

---

## 5. Development & Build Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start local development server
npm run dev

# Run TypeScript check & production build
npm run build

# Preview production build locally
npm run preview

# Run fast linter (oxlint)
npm run lint
```

---

## 6. How to Connect a Real Booking Backend Later

The booking logic is completely decoupled in `src/lib/bookingService.ts`.

To integrate an API server:
1. Set the environment variable in `.env.local`:
   ```env
   VITE_BOOKING_API_URL=https://api.yourclinicdomain.com/v1/appointments
   VITE_DEMO_MODE=false
   ```
2. The `submitAppointmentRequest` function will automatically post the payload to your endpoint:
   ```json
   {
     "patientName": "Mohamed Ahmed",
     "phoneNumber": "01029720243",
     "preferredDate": "2026-10-25",
     "preferredTimePeriod": "morning",
     "serviceCategory": "General Dentistry & Preventive Care",
     "shortNote": "Routine checkup and cleaning",
     "consentGiven": true
   }
   ```
3. WhatsApp fallback will continue to operate as an alternative channel.

---

## 7. Information Requiring Clinic Confirmation Before Public Launch

Before launching publicly to the clinic's official domain:
- [ ] Confirmation of doctors' names, Syndicate registration numbers, and approved biographies.
- [ ] Confirmation of official clinic opening hours and days.
- [ ] Confirmation of the final list of clinical treatments and services offered.
- [ ] Confirmation of verified WhatsApp booking phone number.
- [ ] Official clinic logo files (if an official mark exists, to replace the temporary typographic wordmark).
