
export interface TableRow {
  label: string;
  value: string;
}

export type TableData = TableRow[];

export const hotMenu: TableData = [
  { label: "Mocha Latte", value: "€ 7.50" },
  { label: "Caffe Formaggio", value: "€ 5.00" },
  { label: "Espresso", value: "€ 3.50" },
  { label: "Chai Verde Latte", value: "€ 5.50" },
];

export const juicyMenu: TableData = [
  { label: "Branched Apricots", value: "€ 4.20" },
  { label: "Deep Rasberries", value: "€ 3.50" },
  { label: "Smooth Oranges", value: "€ 6.50" },
];

export const infoTable: TableData = [
  { label: "Mon-Sun", value: "8am – 11pm" },
  { label: "Caffe Retro", value: "€Canto VI" },
  { label: "0123-45 67 89", value: "caffe@lorem.pge" },
];
