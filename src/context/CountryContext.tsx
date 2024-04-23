import { createContext, useState } from 'react';
import { CountryContextType } from '.';
import { Country } from '../schema';

// Creamos el contexto
export const CountryContext = createContext<CountryContextType>({
    countries: [],
    fetchApi: function (): void {
        throw new Error('Function not implemented.');
    }
});

// Hook personalizado para acceder al contexto
export const useCountryContext = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    const fetchApi = async ()=>{
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags');
        const json = await res.json();
        setCountries(json)
    }

    return {
        countries,
        fetchApi
    }
};
