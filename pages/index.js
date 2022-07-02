import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import Pagination from '../components/Pagination/Pagination'
import Head from '../components/Layout/Head'

export default function Home() {
  const [characters, setCharacters] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNum}`).then(response => setCharacters(response.data.results))
  }, [pageNum])

  function callback(num) {
    setPageNum(num)
  }

  if (characters === null) return "No post!"

  return (
    <>
      <Head title="Rick&Morty Case" description="Rick&Morty Case" />
      <ul className=" gap-10 flex flex-wrap pt-6 items-center justify-center">
        {characters?.map(character => {
          return <li key={character.id}>
            <Card data={character} />
          </li>
        })}
      </ul>
      <Pagination onClick={callback} />
    </>
  )
}
