import React, { useContext, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import SideModal from './SideModal';
import { SideContext } from '../helpers/Contexts';

const Sidebar = () => {
  const { sidebar, setSidebar, modal, setModal } = useContext(SideContext);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const showModal = () => {
    console.log('modal', modal);
    setModal(!modal);
  };
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className="sidebar-container">
          <div className={sidebar ? 'sidebar active' : 'sidebar'}>
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
              <li>
                <li className="nav-text">
                  <Link to="/past-year-paper">
                    <AiIcons.AiOutlineFileText />
                    <span className="sidebar-text">Past Year Papers</span>
                  </Link>
                </li>

                <li className="nav-text">
                  <Link to="https://data-viz-iota.vercel.app" target="_blank">
                    <AiIcons.AiOutlineDollar />
                    <span className="sidebar-text">Salary Insights</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/logsheet">
                    <AiIcons.AiOutlineDownload />
                    <span className="sidebar-text">BOA Logsheet</span>
                  </Link>
                </li>
                <li
                  className="nav-text"
                  onClick={(e) => {
                    showModal(e);
                  }}
                >
                  <Link>
                    <AiIcons.AiFillFolderOpen />
                    <span className="sidebar-text">Reference Materials</span>
                  </Link>
                </li>
              </li>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
