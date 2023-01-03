import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export const PokemonCard = ({ pokemons }) => {
  const router = useRouter();

  const onClicke = () => {
     router.push(`/pokemon/${pokemons.id}` );
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemons.id} onClick={onClicke}>
      <Card isHoverable >
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemons.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemons.name}</Text>
            <Text>#{pokemons.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
