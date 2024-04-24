import { createContext, useState } from 'react';
import { CountryContextType } from '.';
import { Country } from '../schema';

// Creamos el contexto
export const CountryContext = createContext<CountryContextType>({
    countries: [],
    isDarkMode:false,
    setisDarkMode:function (): void {
        throw new Error('Function not implemented.');
    },
    fetchApi: function (): void {
        throw new Error('Function not implemented.');
    },
    getCountriesByRegion: function (regionItem: string):void {
        throw new Error('Function not implemented.');
    },
});

// Hook personalizado para acceder al contexto
export const useCountryContext = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isDarkMode, setisDarkMode] = useState<boolean>(false)

    //https://restcountries.com/v3.1/name/eesti?fields=name,capital,population,flags
    const fetchApi = async ()=>{
        const res = await fetch('https://restcountries.com/v3.1/region/america?fields=name,capital,population,flags');
        const json = await res.json();
        setCountries(json)
    }

    const getCountriesByRegion = async (region:string)=>{
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}?fields=name,capital,population,flags`);
        const json = await res.json();
        setCountries(json)
    }

    return {
        countries,
        isDarkMode,
        setisDarkMode,
        getCountriesByRegion,
        fetchApi
    }
};
