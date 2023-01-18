import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const handleFilter = (item) => {
    if (item === 'all') {
      setMenuItems(items)
      return
    }
    const filteredItems = items.filter((menu) => menu.category === item)
    setMenuItems(filteredItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h1>Our Menu</h1>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <Categories items={categories} handleFilter={handleFilter} />
        </div>
        <div className='section-center'>
          <Menu menus={menuItems} />
        </div>
      </section>
    </main>
  )
}

export default App
