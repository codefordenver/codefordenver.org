import React, { CSSProperties } from 'react';
import { Segment, Grid, List } from 'semantic-ui-react';
import { Header, Icon } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router-dom';
import { PathURL, ExternalURL } from './Router';
import { FooterLink } from './FooterLink';

export function Footer(router: RouteComponentProps) {
  const social__css: CSSProperties = { color: 'white', opacity: 0.9 };
  const meetup__css: CSSProperties = {
    color: '#E14E54',
    opacity: 0.9,
    textDecoration: 'underline'
  };

  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Grid divided inverted stackable style={{ margin: '0 1em' }}>
        <Grid.Row columns="equal">
          <Grid.Column width={6}>
            <p>We meet on most Monday nights. Join us, everyone is welcome!</p>
            <p>
              RSVP on our{' '}
              <a style={meetup__css} href={ExternalURL.MEETUP}>
                Meetup
              </a>{' '}
              page to see the full schedule of events and to let us know you’re
              coming.
            </p>

            <a style={social__css} href={ExternalURL.MEETUP}>
              <Icon size="large" name="meetup" />
            </a>

            <a style={social__css} href={ExternalURL.GITHUB}>
              <Icon size="large" name="github" />
            </a>

            <a style={social__css} href={ExternalURL.FACEBOOK}>
              <Icon size="large" name="facebook" />
            </a>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="Home" />
            <List link inverted>
              <FooterLink to={PathURL.HOME_US} text="What We Do" />
              <FooterLink to={PathURL.HOME_FEATURED} text="Featured Projects" />
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <FooterLink to={PathURL.ABOUT_ORGANIZATION} text="Organization" />
              <FooterLink to={PathURL.ABOUT_SPONSORS} text="Sponsors" />
              <FooterLink to={PathURL.ABOUT_CONTACT} text="Contact" />
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="Volunteer" />
            <List link inverted>
              <FooterLink to={PathURL.VOLUNTEER_CULTURE} text="Culture" />
              <FooterLink to={PathURL.VOLUNTEER_HOW} text="How We Work" />
              <FooterLink to={PathURL.VOLUNTEER_JOIN} text="Join" />
              <FooterLink to={PathURL.VOLUNTEER_FAQ} text="FAQ" />
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="Resources" />
            <List link inverted>
              {/* <FooterLink to={PathURL.RESOURCES_CURRENT_PROJECTS} text='Current Projects' /> */}
              <List.Item as="a" href={ExternalURL.GITHUB}>
                GitHub
              </List.Item>
              <List.Item as="a" href={ExternalURL.MEETUP}>
                Members
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
