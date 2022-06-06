import React, { useEffect, useState } from "react";
import API, { clearBaseUrl } from "../../API/API";
import Cards from "../../Cards/Cards";
import { Flex, ThemeInput, ThemeTitle2 } from "../../Style/Globals";
import { CustomInput, SearchButton, SearchForm } from "./style";

const PokemonsPage = () => {
  const [data, setData] = useState([]);
  const [pokemonList, setPokemonList] = useState({});
  const [currentPage, setCurrentPage] = useState([]);
  const [isMounted, setIsMounted] = useState(true);

  function set() {
    setIsMounted(!isMounted);
  }
  useEffect(() => {
    set();
    API.get("?limit=100000&offset=0").then((res) => {
      if (isMounted) {
        setData(res.data);
      }
    });
    return () => {
      set();
    };
  }, []);

  useEffect(() => {
    set();
    API.get().then((res) => {
      if (isMounted) {
        setCurrentPage(res.data);
      }
    });

    return () => {
      set();
    };
  }, []);

  useEffect(() => {
    setPokemonList(currentPage);
  }, [currentPage]);

  // async function loadPokemon(url) {
  //   const pkmUrl = clearBaseUrl(url);
  //   console.log(pkmUrl);
  //   // API.get(pkmUrl).then((res) => console.log(res.data));
  // }
  console.log(pokemonList);
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
        {pokemonList?.results?.map((pokemon) => (
          <Cards key={pokemon.name} pkmUrl={pokemon.url}></Cards>
        ))}
      </Flex>
    </Flex>
  );
};

export default PokemonsPage;
