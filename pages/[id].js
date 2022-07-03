import axios from 'axios';
import Head from '../components/Layout/Head';

export const getStaticPaths = async () => {
    const pageNums = Array.from({length: 826}, (_, i) => i + 1)
    
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${pageNums}`);
    const data = await res.data;

    const paths = data.map(character => {
        return {
            params: {
                id: character.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (paths) => {
    const id = paths.params.id;
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.data;

    return {
        props: {
            character: data
        }
    }
}

const Details = ({ character }) => {
    return (
        <>
            <Head title={character.name} description={character.name} />
            <div className="flex flex-col justify-center items-center mx-auto py-5 w-1/2 border-2 mt-10 border-emerald-500 bg-emerald-50">
                <img className="mx-auto" loading="lazy" src={`${character.image}`} alt={`${character.name}`} />
                <span className="text-3xl font-bold text-red-400">{`${character.name}'s Details `}</span>
                <p>
                    <b>Name: </b>{character.name}
                </p>
                <p>
                    <b>Status: </b>{character.status}
                </p>
                <p>
                    <b>Species: </b>{character.species}
                </p>
                <p>
                    <b>Gender: </b>{character.gender}
                </p>
                <p>
                    <b>Origin: </b>{character.origin.name}
                </p>
                <p>
                    <b>Location: </b>{character.location.name}
                </p>
            </div>
        </>
    );
}

export default Details;