import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SideBarData } from './SidebarData'
import './Nav.css';
import { IconContext } from 'react-icons'


function Nav() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar) 

  return (
    <>
      <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSideBar} />
            </Link>
        </div>

        <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to='#' className='menu-bars'>
              <IoIcons.IoClose />
              </Link>
            </li>
            {SideBarData.map((item, i) => {
              return (
                <li key={i} className={item.classStyle}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Nav;