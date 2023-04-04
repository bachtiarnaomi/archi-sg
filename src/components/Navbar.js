import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
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
