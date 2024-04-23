import { createContext, useState } from 'react';
import { CountryContextType } from '.';

// Creamos el contexto
export const CountryContext = createContext<CountryContextType>({
    countries: [],
    fetchApi: function (): void {
        throw new Error('Function not implemented.');
    }
});

// Hook personalizado para acceder al contexto
export const useCountryContext = () => {
    const [countries, setCountries] = useState<string[]>([]);

    const fetchApi = async ()=>{
        const res = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const json = await res.json();
    }

    return {
        countries,
        fetchApi
    }
};
