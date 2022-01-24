import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Nav() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar) 

  return (
    <>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSideBar} />
            </Link>
        </div>

        <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className="navbar-toggle">
              <Link to='#' className='menu-bars'>
              <IoIcons.IoClose />
              </Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Nav;