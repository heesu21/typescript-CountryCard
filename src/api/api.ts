import axios from "axios";
import { Country } from "../types/country";

export const getCountryList = async (): Promise<Country[]> => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  console.log(data);
  return data;
};
