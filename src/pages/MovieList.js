import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'
import { useTitle } from '../hooks/useTitle'


export const MovieList = ({ apiPath, title }) => {

    const { data: movies } = useFetch(apiPath)

    useTitle(`${title}`)

    return (

        <section className='max-w-7xl mx-auto py-7 p-4'>

            <div className='flex justify-start flex-wrap other:justify-evenly'>
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
