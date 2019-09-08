import React from "react";
import { Grid, Image, Header, Segment, Button } from "semantic-ui-react";

export function Volunteer() {
  return (
    <Segment
      inverted
      color='red'
      vertical
      style={{ padding: "0em 1em", margin: "5em 0em" }}
    >
      <Grid columns='equal' stackable>
        <Grid.Row>
          <Grid.Column verticalAlign='middle' className='columnTextLeft'>
            <Header inverted as='h2' content='What we do' />
            <p>
              We build apps, software, and websites for non-profits, local
              government, and the community that serve their needs. Who we work
              with and what we work on are determined on project pitch nights.
              To stay on top of projects throughout the year, we host weekly
              project nights for all members, and a special onboarding new
              members night once a month.
            </p>
            <Button circular basic inverted color='red'>
              Volunteer
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Image
              src={process.env.PUBLIC_URL + "/images/CFD-CoffeeOnThePoint.jpg"}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
