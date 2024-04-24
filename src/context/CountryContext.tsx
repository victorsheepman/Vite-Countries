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
    getCountriesByRegion: function (regionItem: string):void {
        throw new Error('Function not implemented.');
    },
    getCountriesByName: function (countryName:string):void{
        throw new Error('Function not implemented.'); 
    }
});

// Hook personalizado para acceder al contexto
export const useCountryContext = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isDarkMode, setisDarkMode] = useState<boolean>(false)
    const [regionSelected, setRegionSelected] = useState<RegionEnum>(RegionEnum.America)
   
    const fetchApi = async ()=>{
        const res = await fetch(`https://restcountries.com/v3.1/region/${regionSelected}?fields=name,capital,population,flags`);
        const json = await res.json();
        setCountries(json)
    }

    const getCountriesByRegion = async (region:string)=>{
        
        setRegionSelected(region as RegionEnum)//save region to fetch api function

        const res = await fetch(`https://restcountries.com/v3.1/region/${region}?fields=name,capital,population,flags`);
        const json = await res.json();
        setCountries(json)
    
    }



    const getCountriesByName = async (countryName:string)=>{
        if (countryName) {
          callApi(countryName)
        } else {
            fetchApi()
        }
    }

    const callApi= async (country:string)=>{

        const res = await fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags`);
        
        if(res.status == 200) {
            const json = await res.json();
            setCountries(json)
        }else{
            setCountries([])
        }
    
    }

    return {
        countries,
        isDarkMode,
        setisDarkMode,
        getCountriesByRegion,
        getCountriesByName,
        fetchApi
    }
};
