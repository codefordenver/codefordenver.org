import React, { CSSProperties } from "react";
import { Grid, Image, Header, Segment } from "semantic-ui-react";

export function Sponsors() {
  const image__css: CSSProperties = {
    margin: "0 auto",
    maxWidth: "250px",
    padding: 0,
  };

  return (
    <Segment style={{ margin: "0" }}>
      <Grid style={{ padding: "5em 0" }} columns='equal' stackable>
        <Header as='h2' content='Our sponsors' />
        <Grid.Row textAlign='center' verticalAlign='middle' columns={3}>
          <Grid.Column style={{ padding: 0 }}>
            <Image
              style={image__css}
              src={
                process.env.PUBLIC_URL +
                "/images/sponsors/sponsor-gary_community_investments-300x236.png"
              }
            />
          </Grid.Column>
          <Grid.Column style={{ padding: 0 }}>
            <Image
              style={image__css}
              src={process.env.PUBLIC_URL + "/images/sponsors/galvanize.png"}
            />
          </Grid.Column>
          <Grid.Column style={{ padding: 0 }}>
            <Image
              style={image__css}
              src={
                process.env.PUBLIC_URL +
                "/images/sponsors/jetbrains-variant-4-700x391.png"
              }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
