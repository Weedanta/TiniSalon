export interface ProgramPackage {
  id: number;
  title: string;
  items: string[];
  duration: string;
  price: string;
}

export const PROGRAMS: ProgramPackage[] = [
  {
    id: 1,
    title: "Paket 1",
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
    title: "Tambahan Paket 2",
    items: [
      "Pangkas",
      "Bleaching Badan",
      "Keriting Permanen",
      "Keriting Bulu mata",
      "Terapi telinga",
      "Lulutan",
      "Smoothing Rambut",
    ],
    duration: "Lama belajar: 2 bulan + 2 bulan PKL",
    price: "Rp6.000.000",
  },
  {
    id: 3,
    title: "Tambahan Paket 3",
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
    title: "Tambahan Paket 4",
    items: [
      "Smoothing Warna",
      "Highlight Rambut",
      "Cukur alis",
      "Hair Extension",
      "Sanggulan Pesta/Wisuda",
      "Make up Pesta/Wisuda",
      "Eyelash",
    ],
    duration: "Lama belajar: 2 bulan + 2 bulan PKL",
    price: "Rp10.000.000",
  },
  {
    id: 5,
    title: "Tambahan Paket 5",
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
