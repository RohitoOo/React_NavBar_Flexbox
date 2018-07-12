import React from 'react'
import './Toolbar.css'


const toolbar = props => (

  <header className='toolbar'>

    <nav className='toolbar_navigation'>
      <div>Hamburger Icon</div>
      <div><a href="/" className='toolbar_logo'>The Logo</a> </div>
        <div className="toolbar_navigation-items">
          <ul>
            <li><a href='/'>Products</a></li>
            <li><a href='/'>Users</a></li>
          </ul>
        </div>
    </nav>

  </header>


)


export default toolbar;
