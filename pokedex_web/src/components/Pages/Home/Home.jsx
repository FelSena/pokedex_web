import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Grif,
  ThemeButton,
  ThemeImg,
  ThemeLink,
  ThemeSpan,
  ThemeTitle1,
} from "../../Style/Globals";
import { HomeBg } from "./style";

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
        <ThemeButton>
          <ThemeLink to="/pokemons">Veja os Pokemons</ThemeLink>
        </ThemeButton>
      </Flex>
      <Flex height="100%">
        <HomeBg></HomeBg>
      </Flex>
    </Flex>
  );
};

export default HomePage;
