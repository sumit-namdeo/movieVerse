import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpg';

export const Card = ({ img, movie }) => {
    const { id, title, poster_path } = movie;
    const image = poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}` : placeholder;
    
    return (
        <div>
            <img className="rounded-lg  h-auto max-w-full rounded-lg" src={image} alt="" />

            <Link to={`/movie/${id}`} className="inline-flex font-small items-center text-gray-800 dark:text-gray-200 hover:underline">
                {title}

            </Link>
        </div>
    )
}
