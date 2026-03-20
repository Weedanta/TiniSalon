export interface OpeningHour {
  day: string;
  hours: string;
  dayIndex: number;
}

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Senin", hours: "08.00 – 21.00", dayIndex: 1 },
  { day: "Selasa", hours: "08.00 – 21.00", dayIndex: 2 },
  { day: "Rabu", hours: "08.00 – 21.00", dayIndex: 3 },
  { day: "Kamis", hours: "08.00 – 21.00", dayIndex: 4 },
  { day: "Jumat", hours: "08.00 – 21.00", dayIndex: 5 },
  { day: "Sabtu", hours: "08.00 – 21.00", dayIndex: 6 },
  { day: "Minggu", hours: "10.00 – 21.00", dayIndex: 0 },
];

export const SECTION_CONTENT = {
  title: "Jam Buka Salon",
  description:
    "Kami siap melayani Anda setiap hari. Kunjungi Tini Salon di jam‑jam berikut untuk pengalaman perawatan terbaik.",
  cardTitle: "Jadwal Operasional",
  todayLabel: "Today",
};

export function getTodayIndex(): number {
  return new Date().getDay();
}
