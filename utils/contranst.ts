const BASE_URL = "https://pokeapi.co/api/v2";
const apiCacheTime = 3600000;
const findLanguage = (obj: any, key: string) => {
  const find = obj?.find((item: any) => item.language.name === key);
  return find?.name;
};

function getPokemonIdFromUrl(url: string): string {
  return url.split("/").slice(-2, -1)[0];
}

export { BASE_URL, apiCacheTime, findLanguage, getPokemonIdFromUrl };
