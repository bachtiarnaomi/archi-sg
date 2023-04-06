import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SideContext } from '../helpers/Contexts';
import * as FaIcons from 'react-icons/fa';
const Navbar = () => {
  const { sidebar, setSidebar } = useContext(SideContext);
  return (
    <nav className="navbar">
      <div className='"sidebar"'>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars
            onClick={() => {
              setSidebar(!sidebar);
            }}
          />
        </Link>
      </div>
      <Link className="title" to="/">
        <b>Archi.sg</b>
      </Link>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/communities">Communities</Link>
        <Link
          to="/contact"
          style={
            {
              // color: 'white',
              // backgroundColor: '#d3c7b7',
              // borderRadius: '8px',
            }
          }
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
