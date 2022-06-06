import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/background.png";
import {
  Flex,
  ThemeButton,
  ThemeImg,
  ThemeLink,
  ThemeSpan,
  ThemeTitle1,
} from "../../Style/Globals";
import { PikachuBox } from "./style";

const HomePage = () => {
  return (
    <Flex height="100%" padding="0 0 0 12%">
      <Flex
        height="40%"
        width="40%"
        direction="column"
        alignitems="flex-start"
        justifycontent="space-between"
      >
        <ThemeTitle1>Qual Pokémon você escolheria?</ThemeTitle1>
        <ThemeSpan>
          Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
          habilidades.
        </ThemeSpan>
        <Link to="/pokemons">
          <ThemeButton>Veja os Pokemons</ThemeButton>
        </Link>
      </Flex>
      <PikachuBox>
        <ThemeImg src={background} alt="pikachu"></ThemeImg>
      </PikachuBox>
    </Flex>
  );
};

export default HomePage;
