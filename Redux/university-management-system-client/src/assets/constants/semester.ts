export const semesterNameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];
const currentYear = new Date().getFullYear();
export const yearOptions = Array.from(new Array(5), (_val, index) => ({
  value: (currentYear + index).toString(),
  label: (currentYear + index).toString(),
}));
