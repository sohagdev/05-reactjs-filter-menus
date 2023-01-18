import React from 'react'

const Categories = ({ items, handleFilter }) => {
  return items.map((item, index) => (
    <button
      type='button'
      className='filter-btn'
      key={index}
      onClick={() => handleFilter(item)}
    >
      {item}
    </button>
  ))
}

export default Categories
