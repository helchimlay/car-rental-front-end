import React from "react"

const FilterList = (props) => {
  const { change, items, label, value } = props
  return (
    <select onChange={change} value={value ? value : label}>
      <option value="">{label}</option>
      {items.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  )
}

export default FilterList
