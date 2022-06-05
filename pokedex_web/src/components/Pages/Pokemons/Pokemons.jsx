import React from "react";
import { Flex, ThemeInput, ThemeTitle2 } from "../../Style/Globals";
import { CustomInput, SearchButton, SearchForm } from "./style";

const PokemonsPage = () => {
  return (
    <Flex height="100%" direction="column">
      <Flex
        height="15%"
        direction="column"
        padding="0 12%"
        margin="0 2.5% 0 0 "
      >
        <ThemeTitle2>
          Mais de 250 Pokemons para você escolher o seu favorito!
        </ThemeTitle2>
        <SearchForm>
          <CustomInput>
            <ThemeInput
              width="95%"
              placeholder="Pesquisar Pokemon"
            ></ThemeInput>
            <SearchButton></SearchButton>
          </CustomInput>
        </SearchForm>
      </Flex>
      <Flex height="75%" padding="0 12%">
        <span>OS CARDS SAO AQUI</span>
      </Flex>
    </Flex>
  );
};

export default PokemonsPage;
