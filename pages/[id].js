import axios from 'axios';

export const getStaticPaths = () => {
    let data = null;
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => data = response.data.results);

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

const Details = () => {
    return (
        <div>
        <h1>Details</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quidem, quisquam.
        </p>
        </div>
    );
}

export default Details;