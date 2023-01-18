import React from 'react'

const Menu = ({ menus }) => {
  return menus.map((menu) => (
    <article className='menu-item' key={menu.id}>
      <img src={menu.img} alt={menu.title} className='photo' />
      <div className='item-info'>
        <header>
          <h4>{menu.title}</h4>
          <h4 className='price'>{menu.price}</h4>
        </header>
        <p className='item-text'>{menu.desc}</p>
      </div>
    </article>
  ))
}

export default Menu
