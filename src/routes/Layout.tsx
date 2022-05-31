import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/imageList">Saved images</Link>
          </li>          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;