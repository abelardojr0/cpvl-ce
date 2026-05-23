export const formatMonth = (date: string) => {
  if (!date) return "-";

  const [year, month] = date.split("-");
  if (!year || !month) return date;

  return `${month}/${year}`;
};

export const onlyNumbers = (value: string) => value.replace(/\D/g, "");
