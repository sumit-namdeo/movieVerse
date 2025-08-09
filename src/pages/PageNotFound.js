import React, { useEffect } from 'react'

export const PageNotFound = () => {

    useEffect(() => {
        document.title = `Page Not Found | MovieVerse`;
    }, [])

    return (
        <section className='max-w-7xl mx-auto py-7 p-4'>

            <div className='flex justify-start flex-wrap other:justify-evenly'></div>
            <div className='p-5'>
                <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                    <span class="text-4xl">OOPs Page you are looking is not found</span>
                </div>
            </div>
        </section>
    )
}
