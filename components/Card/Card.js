import Link from 'next/link'
import React from 'react'

function Card({data}) {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/${data?.id}`}>
                <img className="rounded-t-lg mx-auto" loading="lazy" src={`${data?.image || '/'}`} alt={`${data?.name || "/"}`} />
            </Link>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.status} - {data?.species} - {data?.gender}</p>
                <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Link href={`/${data?.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Go to Character Page
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Card