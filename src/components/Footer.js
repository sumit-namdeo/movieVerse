import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (


        <footer className="bg-white  shadow-sm dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Movieverse™</Link>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">

                    <a href="https://www.linkedin.com/in/sumit-namdeo/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" target='_blank'>
                        LinkedIn
                    </a>
                    <a href="https://github.com/sumit-namdeo" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" target='_blank'>
                        Github
                    </a>
                </div>
            </div>
        </footer>


    )
}
