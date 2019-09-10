import React from "react";
import { Button, Header, Grid, Segment, } from "semantic-ui-react";

export function AboutOrg() {

  return (
    <Segment style={{ margin: "0", border: "0" }}>
      <Grid container stackable columns={2} className="bg-white">
        <Grid.Row>
          <Grid.Column>
            <Header as='h2'>Our Organization</Header>
            <p>
              We are a Code for America Brigade community with
              regular meetups and other events to help bring together
              creative problem solvers with local community groups
              and government trying to address some of our most
              pressing 21st century problems.
            </p>
            <Button circular color='black'>
              Join Us   
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">Our Vision</Header>
            <p>
              The Denver Community will be better served
              by empowering local governments and nonprofits
              through technology.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header>Our Sponsors</Header>
            <p>
              We couldn’t do any of this work without our sponsors.
              If you’d like to learn more about how to support Code
              for Denver, reach out.
            </p>
            <Button circular color='black'>
              Donate
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

