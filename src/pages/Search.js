import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'

export const Search = ({ apiPath }) => {

    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const { data: movies } = useFetch(apiPath, queryTerm)

    useTitle(`Search Reult For ${queryTerm} | MovieVerse`);
    
    return (

        <section className='max-w-7xl mx-auto py-7 p-4'>

            <span className='text-3xl text-gray-700 dark:text-white py-4'>
                {movies.length === 0 ? `No Result Found for :${queryTerm}` : `Search Result for : ${queryTerm}`}
            </span>

            <div className='flex justify-start flex-wrap mt-5'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 pb-4">
                    {
                        movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))
                    }

                </div>

            </div>
        </section>
    )
}
