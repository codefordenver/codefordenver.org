import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";

export function Sponsors() {
  return (
    <Grid style={{ margin: "5em 0" }} columns='equal'>
      <Header as='h2' content='Our sponsors' />
      <Grid.Row>
        <Grid.Column>
          <Image
            src={
              process.env.PUBLIC_URL +
              "/images/sponsors/sponsor-gary_community_investments-300x236.png"
            }
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            src={process.env.PUBLIC_URL + "/images/sponsors/galvanize.svg"}
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            src={
              process.env.PUBLIC_URL +
              "/images/sponsors/jetbrains-variant-4-700x391.png"
            }
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
