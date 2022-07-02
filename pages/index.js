import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import Layout from '../components/Layout/Layout'

export default function Home() {
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(response => setCharacters(response.data.results))
  }, [])  

  if (!characters) return "No post!"

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Rick & Morty Case</h1>
      <ul className=" gap-10 flex flex-wrap pt-6 items-center justify-center">
      {characters?.map(character => {
        return <li key={character.id}>
          <Card data={character} />
        </li>
      })}
      </ul>
    </Layout>
  )
}
