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

const Details = ({character}) => {
    return (
        <div>
        <h1>Details</h1>
        <p>
            {character.name}
        </p>
        </div>
    );
}

export default Details;