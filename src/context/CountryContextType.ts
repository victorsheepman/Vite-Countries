import { Country } from "../schema";

export interface CountryContextType {
    countries: Country[];
    fetchApi: () => void;
}
  