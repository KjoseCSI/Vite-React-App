export interface ResponseAPI {
    name: string;
    sprites: { front_default: string }
}

export const PokemonSearchAPI = async (pokemon: string, signal?: AbortSignal): Promise<ResponseAPI | null> => {
    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase().trim()}`
        const res = await fetch(url, { signal });

        if(res.status === 404) return null

        const data: ResponseAPI = await res.json();
        return data

    } catch (error) {
        console.log((error as Error).message);
        return null
    }
}