import logo from "../../assets/images/argentBankLogo.png";
import { NavLink } from "react-router-dom";
//import { LuLogOut } from "react-icons/lu";
const Navigation = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <></>
      <NavLink className="main-nav-item" to="/sign-in">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </nav>
  );
};
export default Navigation;
