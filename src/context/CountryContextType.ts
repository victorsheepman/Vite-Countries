import { Country, CountryDetail} from "../schema";

export interface CountryContextType {
    countries: Country[];
    countryDetail: CountryDetail;
    isDarkMode:boolean;
    setisDarkMode:React.Dispatch<React.SetStateAction<boolean>>;
    fetchApi: () => void;
    getCountriesByRegion: (regionItem: string) => void;
    getCountriesByName: (countryName: string) => void;
    getCountryDetail: (name: string) => void;
}
  