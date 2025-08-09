import { useEffect, useState } from 'react'

export const useFetch = (apiPath, q) => {

    const [data, setData] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${q}`

    useEffect(() => {

        async function getMovies() {

            const response = await fetch(url);
            const json = await response.json()
            setData(json.results);

        }

        getMovies();

    }, [url])


    return { data }
}
