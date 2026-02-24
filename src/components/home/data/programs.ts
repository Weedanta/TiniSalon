export interface ProgramPackage {
  id: number;
  type?: "primary" | "secondary"; 
  title: string;
  subtitle: string; 
  note: string; 
  badge?: string; 
  highlight?: boolean;
  items: string[];
  duration: string;
  price: string;
}

export const PROGRAMS: ProgramPackage[] = [
  {
    id: 1,
    title: "Paket 1",
    subtitle: "Paket Dasar",
    note: "Mulai karier salon dari fondasi yang kuat",
    items: [
      "Catok / Babyliss",
      "Cuci Rambut",
      "Blow Rambut",
      "Creambath",
      "Masker / SPA (Rambut)",
      "Facial",
      "Cat Rambut",
      "Keriting Sosis",
    ],
    duration: "Lama belajar: 2 bulan + 2 bulan PKL",
    price: "Rp4.000.000",
  },
  {
    id: 2,
    title: "Paket 2",
    subtitle: "Paket 1 + Lanjutan",
    note: "Semua materi Paket 1, ditambah skill perawatan lebih lanjut",
    badge: "Terlaris",
    highlight: true,
    items: [
      "Pangkas",
      "Bleaching Badan",
      "Keriting Permanen",
      "Keriting Bulu Mata",
      "Terapi Telinga",
      "Lulutan",
      "Smoothing Rambut",
    ],
    duration: "Lama belajar: 2 bulan + 2 bulan PKL",
    price: "Rp6.000.000",
  },
  {
    id: 3,
    title: "Paket 3",
    subtitle: "Paket 2 + Tata Rias Dasar",
    note: "Semua materi Paket 2, ditambah tata rias & perawatan kuku",
    items: [
      "Toning Rambut",
      "Sanggulan Dasar",
      "Bentuk Rambut Dasar",
      "Babyliss Boba",
      "Manicure",
      "Pedicure",
    ],
    duration: "Lama belajar: 2 bulan + 2 bulan PKL",
    price: "Rp8.000.000",
  },
  {
    id: 4,
    title: "Paket 4",
    subtitle: "Paket 3 + Pesta & Wisuda",
    note: "Semua materi Paket 3, ditambah rias acara formal",
    items: [
      "Smoothing Warna",
      "Highlight Rambut",
      "Cukur Alis",
      "Hair Extension",
      "Sanggulan Pesta / Wisuda",
      "Make Up Pesta / Wisuda",
      "Eyelash",
    ],
    duration: "Lama belajar: 2 bulan + 2 bulan PKL",
    price: "Rp10.000.000",
  },
  {
    id: 5,
    title: "Paket 5",
    subtitle: "Paket 4 + Sulam & Pengantin",
    note: "Paket terlengkap — semua materi Paket 4 plus teknik semi-permanen",
    badge: "Terlengkap",
    items: [
      "Sulam Alis",
      "Sulam Eyeliner",
      "Sulam Bibir",
      "BB Glow",
      "Tata Rias Pengantin",
    ],
    duration: "Lama belajar: 2 bulan + 2 bulan PKL",
    price: "Rp15.000.000",
  },
];
