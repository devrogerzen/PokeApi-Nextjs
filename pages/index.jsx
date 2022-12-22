import { pokeApi } from "../api";
import { Layout } from "../components/layouts";

const  HomePage = (props) => {


  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
}


export async function getStaticProps(context) {

const resp = await pokeApi.get('/pokemon?limit=151')

console.log(resp)


  return {
    props: {

    }, 
  }
}

export default HomePage