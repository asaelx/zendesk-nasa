export const formatDate = (date) => {
  const currentDate = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  date = currentDate.toLocaleDateString("en-us", options);
  return date;
};
