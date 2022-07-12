//function generates and returns years for <select>
const renderSelectOptions = () => {
  const years = [];
  for (
    let a = new Date().getFullYear();
    a >= new Date().getFullYear() - 100;
    a--
  ) {
    years.push(a);
  }
  return years;
};

export default renderSelectOptions;
