import { createContext, useState } from 'react';
import { CountryContextType } from '.';
import { Country, RegionEnum } from '../schema';

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
    getCountriesByRegion: function (regionItem: RegionEnum):void {
        throw new Error('Function not implemented.');
    },
});

// Hook personalizado para acceder al contexto
export const useCountryContext = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isDarkMode, setisDarkMode] = useState<boolean>(false)


    //https://restcountries.com/v3.1/region/europe?fields=name,capital,population,flags

    const fetchApi = async ()=>{
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags');
        const json = await res.json();
        setCountries(json)
    }

    const getCountriesByRegion = async (regionItem:RegionEnum)=>{
        let region =regionItem.toLowerCase()
        console.log(region);
        
        //const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags');
        //const json = await res.json();
        //setCountries(json)
    }

    return {
        countries,
        isDarkMode,
        setisDarkMode,
        getCountriesByRegion,
        fetchApi
    }
};
