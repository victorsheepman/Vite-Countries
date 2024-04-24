import { Country} from "../schema";

export interface CountryContextType {
    countries: Country[];
    isDarkMode:boolean;
    setisDarkMode:React.Dispatch<React.SetStateAction<boolean>>;
    fetchApi: () => void;
    getCountriesByRegion: (regionItem: string) => void;
    getCountriesByName: (country: string) => void;
}
  