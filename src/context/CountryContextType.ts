import { Country } from "../schema";

export interface CountryContextType {
    countries: Country[];
    isDarkMode:boolean;
    fetchApi: () => void;
}
  