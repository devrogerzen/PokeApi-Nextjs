import { Card, Grid, Row, Text } from "@nextui-org/react";

export const PokemonCard = ({ pokemons }) => {
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemons.id}>
      <Card isHoverable clickable>
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
