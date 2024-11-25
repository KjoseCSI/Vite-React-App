import { useState, useEffect } from 'react';
import { ResponseAPI, PokemonSearchAPI } from '../../components';


export const useSearchPokemon = (search: string) => {

    const [pokemon, setPokemon] = useState<ResponseAPI | null>({} as ResponseAPI);

    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController();

        if (search) {

            setIsLoading(true);

            PokemonSearchAPI(search, controller.signal)
                .then(data => {
                    setPokemon(data);
                    setIsLoading(false);
                });

        }else { setPokemon({} as ResponseAPI) }

        return () => controller.abort();

    }, [search])

    return {
        pokemon,
        isLoading
    }
}