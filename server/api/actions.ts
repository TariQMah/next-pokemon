"use server";

import { request } from "@/utils/axios-utils";

async function fetchData(url: string): Promise<any> {
  try {
    const response = await request({ url });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to handle it outside this function if needed
  }
}

export async function getCategories() {
  return fetchData(`type/`);
}

export async function getSpecificCategory(type: string) {
  return fetchData(`type/${type}`);
}

export async function getPokemonByMove(move: string) {
  return fetchData(`move/${move}`);
}

export async function getFilterSearch(type: string, params: string) {
  try {
    const filters = params?.split(",");
    const requests = filters.map((filter) => fetchData(`type/${filter}`));
    const responses = await Promise.allSettled(requests);
    const successfulResponses = responses
      .filter((result) => result.status === "fulfilled")
      .map((result: any) => result.value.value.data);

    const pokemonName = type;

    const pokemonFoundInResponses = successfulResponses.reduce(
      (foundPokemon, response) => {
        const pokemon = response?.pokemon?.find(
          (record: any) => record.pokemon.name === pokemonName
        );
        if (pokemon) {
          foundPokemon.push(pokemon);
        }
        return foundPokemon;
      },
      []
    );

    return pokemonFoundInResponses;
  } catch (error) {
    console.error("Error fetching filtered search:", error);
    throw error;
  }
}

export async function getPokemon(type: string) {
  return fetchData(`pokemon/${type}`);
}
