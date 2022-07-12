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

// const years = new Array(100);
// years.fill(19).map((item, index) => {
//   if (index < 10) {
//     years[index] += '0' + [index];
//   } else {
//     years[index] += [index];
//   }
// });
// console.log(years);
