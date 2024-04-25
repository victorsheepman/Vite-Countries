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
    getCountriesByRegion: function ():void {
        throw new Error('Function not implemented.');
    },
    getCountriesByName: function ():void{
        throw new Error('Function not implemented.'); 
    },
    getCountryDetail: function ():void{
        throw new Error('Function not implemented.'); 
    }
});

// Hook personalizado para acceder al contexto
export const useCountryContext = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isDarkMode, setisDarkMode] = useState<boolean>(false)
    const [regionSelected, setRegionSelected] = useState<RegionEnum>(RegionEnum.America)

    const filters = "name,capital,population,flags,region,cioc"
   
    const fetchApi = async ()=>{
        const res = await fetch(`https://restcountries.com/v3.1/region/${regionSelected}?fields=${filters}`);
        const json = await res.json();
        setCountries(json)
    }

    const getCountriesByRegion = async (region:string)=>{
        
        setRegionSelected(region as RegionEnum)//save region to fetch api function

        const res = await fetch(`https://restcountries.com/v3.1/region/${region}?fields=${filters}`);
        const json = await res.json();
        setCountries(json)
    
    }

        //https://restcountries.com/v3.1/name/eesti?fields=name,capital,population,flags,region,subregion,tld,currencies,languages,borders
            //https://restcountries.com/v3.1/name/russia?fields=name,capital,population,flags,region,subregion,tld,currencies,languages,borders,cioc
    const getCountriesByName = async (countryName:string)=>{
        if (countryName) {
          callApi(countryName)
        } else {
            fetchApi()
        }
    }

    const callApi= async (country:string)=>{

        const res = await fetch(`https://restcountries.com/v3.1/name/${country}?fields=${filters}`);
        
        if(res.status == 200) {
            const json = await res.json();
            setCountries(json)
        }else{
            setCountries([])
        }
    
    }

    const getCountryDetail = async (name:string)=>{
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${name}?fields=${filters}`);  
        const json = await res.json();
        console.log(json);
    }

    return {
        countries,
        isDarkMode,
        setisDarkMode,
        getCountriesByRegion,
        getCountriesByName,
        getCountryDetail,
        fetchApi
    }
};
