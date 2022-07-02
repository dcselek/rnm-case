import axios from 'axios';

export const getStaticPaths = async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    const data = await res.data.results;

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

export const getStaticProps = async (context) => {
    const id = context.params.id;
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
    );
}

export default Details;