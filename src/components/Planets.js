import React from 'react';
import { Card, Grid } from "semantic-ui-react";

export default function Planets({ data }) {
  return(
    <>
      <h1>Planets</h1>
      <Grid
        columns={4}
        centered
        stackable
      >
        {data.map((planets, i) => {
          return (
            <Grid.Column key={i}>
              <Card raised color='orange'>
                <Card.Content>
                  <Card.Header>{planets.name}</Card.Header>
                  <Card.Description>
                    <strong>Diameter</strong>
                    <p>{planets.diameter}</p>
                    <strong>Climate</strong>
                    <p>{planets.climate}</p>
                    <strong>Population</strong>
                    <p>{planets.population}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}