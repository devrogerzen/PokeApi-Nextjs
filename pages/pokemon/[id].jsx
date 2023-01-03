import { Layout } from "../../components/layouts";

const PokemonPage = ({ pokemon }) => {
  

  return (
    <Layout title="Algun titulo">
      <h1>
        {pokemon.id} - {pokemon.name}
      </h1>
    </Layout>
  );
};

export const getStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151).map((value, index) => `${index + 1}`)];
  console.log(pokemons151);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false
  };
};

export async function getStaticProps({params}) {
  const {id} = params

  const {data} = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`)
  console.log(data)

  return {
    props: {
  pokemon : data
    },
  };
}

export default PokemonPage;
