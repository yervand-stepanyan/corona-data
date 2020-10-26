export const convertDate = date => {
  const dateAndTime = date.split(' ');
  const dateData = dateAndTime[0].split('-');
  const dateToShow = `${dateData[2]}/${dateData[1]}/${dateData[0]}`;

  return `${dateAndTime[1]} ${dateToShow}`;
};
