import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";

export function VolunteerContent(props: any) {
  return (
    <Grid id="Us" columns='equal' stackable>
      <Grid.Row style={{ padding: "0em" }}>
        <Grid.Column verticalAlign='middle' className='columnTextLeft'>
          <Header inverted as='h2' content='What we do' />
          <p>
            We build apps, software, and websites for non-profits, local
            government, and the community that serve their needs. Who we work
            with and what we work on are determined on project pitch nights. To
            stay on top of projects throughout the year, we host weekly project
            nights for all members, and a special onboarding new members night
            once a month.
          </p>
        </Grid.Column>
        <Grid.Column width={props.columnWidth} style={{ padding: "0em" }}>
          <Image
            src={process.env.PUBLIC_URL + "/images/CFD-CoffeeOnThePoint.jpg"}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
