import React, { CSSProperties } from "react";
import {
  Segment,
  Grid,
  List,
} from "semantic-ui-react";
import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { PathURL, ExternalURL } from "./Router";

export function Footer(router: RouteComponentProps) {
  const social__css: CSSProperties = { color: "white", opacity: 0.9 };
  const meetup__css: CSSProperties = { color: "#E14E54", opacity: 0.9, textDecoration: 'underline'};

  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Grid divided inverted stackable style={{margin: "0 1em"}}>
          <Grid.Row columns='equal'>
            <Grid.Column width={6}>
              <p>
                We meet on most Monday nights. Join us, everyone is welcome!
              </p>
              <p>
                RSVP on our <a style={meetup__css} href={ExternalURL.MEETUP}>Meetup</a> page to see
                the full schedule of events and to let us know you’re coming.
              </p>

              <a style={social__css} href={ExternalURL.MEETUP}>
                <Icon size='large' name='meetup' />
              </a>

              <a style={social__css} href={ExternalURL.GITHUB}>
                <Icon size='large' name='github' />
              </a>

              <a style={social__css} href={ExternalURL.FACEBOOK}>
                <Icon size='large' name='facebook' />
              </a>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Home' />
              <List link inverted>
                <List.Item as='a'>What We Do</List.Item>
                <List.Item as={Link} to={PathURL.PROJECTS}>
                  Featured Projects
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Mission</List.Item>
                <List.Item as='a'>Organization</List.Item>
                <List.Item as='a'>Contact</List.Item>
                <List.Item as='a'>Sponsors</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Volunteer' />
              <List link inverted>
                <List.Item as='a'>Culture</List.Item>
                <List.Item as='a'>How We Work</List.Item>
                <List.Item as='a'>FAQ</List.Item>
                <List.Item as='a'>Join Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Resources' />
              <List link inverted>
                <List.Item as='a'>Current Projects</List.Item>
                <List.Item as='a'>GitHub</List.Item>
                <List.Item as='a'>Members</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Segment>
  );
}
