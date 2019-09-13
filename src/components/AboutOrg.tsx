import React from "react";
import { Button, Header, Grid, Segment, } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { PathURL, ExternalURL } from "./Router";
import { HashLink } from "react-router-hash-link";
export function AboutOrg() {

  return (
    <Segment style={{ margin: "0", padding:"10vh 0 5vh"}}>
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
            <Button circular 
              color='black'
              as={Link}
              to={PathURL.VOLUNTEER} >
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
            <Header as="h2">Our Sponsors</Header>
            <p>
              We couldn’t do any of this work without our sponsors.
              If you’d like to learn more about how to support Code
              for Denver,
              <HashLink
                to="/About#Contact"
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
              > contact us</HashLink>.
            </p>
            <Button circular
             color='black'
              as='a'
              href={ExternalURL.OPEN_COLLECTIVE}>
              Donate
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

