import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ContactPage from "./components/Pages/Contact/Contact";
import HomePage from "./components/Pages/Home/Home";
import PokemonsPage from "./components/Pages/Pokemons/Pokemons";
import { Flex, Main } from "./components/Style/Globals";
function App() {
  return (
    <Flex direction="column" justifycontent="space-between" height="79vh">
      <Header></Header>
      <Main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/pokemons" component={PokemonsPage} />
          <Route path="/contatos" component={ContactPage} />
        </Switch>
      </Main>
    </Flex>
  );
}

export default App;
