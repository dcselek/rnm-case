import React from 'react'
import Head from './Head'

export default function Layout({children, className}) {
  return (
    <div className={`w-full text-black ${className}`}>
        <Head title='Rick & Morty' description='Rick & Morty' />
        <main className='w-full'>
            {children}
        </main>
    </div>
  )
}