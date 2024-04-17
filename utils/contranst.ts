const BASE_URL = "https://pokeapi.co/api/v2";
const apiCacheTime = 3600000;
const findLanguage = (obj: any, key: string) => {
  console.log("obj: ", obj);
  const find = obj?.find((item: any) => item.language.name === key);
  return find?.name;
};

export { BASE_URL, apiCacheTime, findLanguage };
