import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import SideModal from './SideModal';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [modal, setModal] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const showModal = () => {
    console.log('modal', modal);
    setModal(!modal);
  };
  return (
    <>
      <SideModal modal={modal} />
      <IconContext.Provider value={{ color: 'white' }}>
        <div className="sidebar">
          {/* <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li>
              {/* {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })} */}
              <li className="nav-text">
                <Link onClick={showModal}>
                  <AiIcons.AiFillFolderOpen />
                  <span>Reference Materials</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link onClick={showModal}>
                  <AiIcons.AiOutlineDownload />
                  <span>BOA Logsheet</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/past-year-paper">
                  <AiIcons.AiOutlineFileText />
                  <span>Past Year Papers</span>
                </Link>
              </li>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
