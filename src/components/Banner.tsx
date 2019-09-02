import React from "react";
import { Grid, Image, Header, Segment, Input, Button } from "semantic-ui-react";

export function Banner() {
  return (
    <Segment inverted vertical style={{ paddingTop: "0", paddingBottom: "0" }}>
      <Grid columns='equal' stackable>
        <Grid.Row style={{ paddingTop: "0", paddingBottom: "0" }}>
          <Grid.Column>
            <Image src={process.env.PUBLIC_URL + "/images/denver-banner.jpg"} />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' style={{marginRight: '1em'}}>
            <p>
              Code for Denver is building the next great generation of civic
              hackers, innovators, and disruptors here in Colorado.
            </p>
            <p>
              We are a Code for America Brigade community with regular meetups
              and other events to help bring together creative problem solvers
              with local community groups and government trying to address some
              of our most pressing 21st century problems
            </p>
            <Header inverted as='h4' content='Join our newsletter!' />  
            <Grid style={{ paddingBottom: "1em" }}>
              <Grid.Column floated='left' width={10}>
                <Input inverted fluid placeholder='Enter your email address' />
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Button circular color='red'>
                  Sign up!
                </Button>
              </Grid.Column>
            </Grid>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
