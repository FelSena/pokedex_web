import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ContactPage from "./components/Pages/Contact/Contact";
import HomePage from "./components/Pages/Home/Home";
import PokemonsPage from "./components/Pages/Pokemons/Pokemons";
import { Flex, Main } from "./components/Style/Globals";

function App() {
  return (
    <Flex direction="column" justifycontent="space-between" height="100vh">
      <Header></Header>
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/pokemons" element={<PokemonsPage />} />
          <Route exact path="/contato" element={<ContactPage />} />
        </Routes>
      </Main>
    </Flex>
  );
}

export default App;
