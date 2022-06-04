import { Link } from "react-router-dom";
import { Flex, ThemeImg, ThemeTitle2 } from "../Style/Globals";
import logo from "../assets/logo.png";
import { HeaderDefault } from "./Style";

function Header() {
  return (
    <HeaderDefault>
      <ThemeImg src={logo} alt="Logo Pokemon" width="7.5%"></ThemeImg>
      <Flex width="35%" height="100%" justifycontent="space-between">
        <ThemeTitle2>
          <Link to="/">Home</Link>
        </ThemeTitle2>
        <ThemeTitle2>
          <Link to="/pokemons">Pokemons</Link>
        </ThemeTitle2>
        <ThemeTitle2>
          <Link to="/contatos">Contato</Link>
        </ThemeTitle2>
      </Flex>
    </HeaderDefault>
  );
}

export default Header;
