import { ThemeImg } from "../Style/Globals";
import logo from "../assets/logo.png";
import { HeaderDefault, NavList } from "./Style";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <HeaderDefault>
      <ThemeImg src={logo} alt="Logo Pokemon" width="10%"></ThemeImg>
      <NavList>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/pokemons"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          <li>Pokemons</li>
        </NavLink>
        <NavLink
          to="/contato"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          <li>Contato</li>
        </NavLink>
      </NavList>
    </HeaderDefault>
  );
}

export default Header;
