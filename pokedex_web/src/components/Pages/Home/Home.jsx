import React from "react";
import background from "../../assets/background.png";
import {
  Flex,
  ThemeButton,
  ThemeImg,
  ThemeLink,
  ThemeSpan,
  ThemeTitle1,
} from "../../Style/Globals";

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
        <ThemeImg src={background} alt="pikachu"></ThemeImg>
      </Flex>
    </Flex>
  );
};

export default HomePage;
