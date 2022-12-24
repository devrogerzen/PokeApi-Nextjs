import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";


const HomePage = ({pokemons}) => {

  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start" >
        {

        pokemons.map((pokemons) => (

       <PokemonCard key={pokemons.id} pokemons={pokemons} />

        ))
        
        }
      </Grid.Container>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  const data = await res.json();

  const results = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons: results,
    },
  };
}

export default HomePage;
