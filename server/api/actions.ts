"use server";
import { request } from "@/utils/axios-utils";

export async function getCategories() {
  try {
    const response = await request({
      url: `type/`,
    });
    return response.data;
  } catch (error) {
    console.log("ERRROR", error);
  }
}

export async function getSpecificCategory(type: any) {
  try {
    const response = await request({
      url: `type/${type}`,
    });
    return response.data;
  } catch (error) {
    console.log("ERRROR", error);
  }
}

export async function getPokemon(type: any) {
  try {
    const response = await request({
      url: `pokemon/${type}`,
    });
    return response.data;
  } catch (error) {
    console.log("ERRROR", error);
  }
}
