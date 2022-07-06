import React from 'react';

const FilterList = props => {
  const { change, items, label } = props;
  return (
    <select onChange={change} defaultValue={label}>
      <option value={label} disabled>
        {label}
      </option>
      {items.map(item => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default FilterList;
