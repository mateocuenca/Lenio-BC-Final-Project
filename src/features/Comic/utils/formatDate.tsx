const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date: any) => {
  const dateObj = new Date(date);

  const day = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  // Step 4: Format the date in the desired format
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

export { formatDate };
