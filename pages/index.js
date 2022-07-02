import axios from 'axios'
import { useEffect } from 'react'
import Layout from '../components/Layout/Layout'

export default function Home() {

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(response => console.log(response))
  })

  return (
    <Layout>
        <h1 className="text-3xl font-bold underline">Rick & Morty Case</h1>      
    </Layout>
  )
}
