const renderSelectOptions = () => {
  let years = new Array(100)
    .fill(undefined)
    .map((val, idx) => idx + new Date().getFullYear() - 99);
  years.reverse();
  return years;
};

export default renderSelectOptions;
