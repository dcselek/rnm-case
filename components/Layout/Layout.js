import React from 'react'

export default function Layout({ children, className }) {
  return (
    <div className={`w-full text-black ${className}`}>
      <div className='flex justify-center pt-6'>
        <h1 className="text-5xl underline font-bold">Rick & Morty Case of For Software</h1>
      </div>
      <main className='w-full'>
        {children}
      </main>
    </div>
  )
}