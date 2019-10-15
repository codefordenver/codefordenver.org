import React from 'react';
import { Segment, Responsive, Header, Grid, Image } from 'semantic-ui-react';
import { VolunteerContent } from './VolunteerContent';

export function Volunteer() {
  return (
    <Segment
      inverted
      color="red"
      vertical
      style={{ padding: '0em', margin: '5em 0em' }}
    >
      <>
        <div className="split-image secondary">
          <div>
            <div className="text">
              <h2>What we do</h2>
              <p>
                We build apps, software, and websites for non-profits, local
                government, and the community that serve their needs. Who we
                work with and what we work on are determined on project pitch
                nights. To stay on top of projects throughout the year, we host
                weekly project nights for all members, and a special onboarding
                new members night once a month.
              </p>
            </div>
          </div>
          <img
            className="desktop-only"
            src={process.env.PUBLIC_URL + '/images/CFD-CoffeeOnThePoint.jpg'}
          />
        </div>
      </>
    </Segment>
  );
}
