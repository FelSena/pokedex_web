import React from "react";
import { Flex, ThemeButton, ThemeSpan, ThemeTitle1 } from "../../Style/Globals";

function HomePage() {
  return (
    <Flex height="100%">
      <Flex>
        <ThemeTitle1></ThemeTitle1>
        <ThemeSpan></ThemeSpan>
        <ThemeButton>Veja os Pokemons</ThemeButton>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}

export default HomePage;
