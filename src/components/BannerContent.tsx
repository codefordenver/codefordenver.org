import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export function BannerContent(props: any) {
  return (
    <>
      <Grid columns="equal" stackable doubling>
        <Grid.Row style={{ padding: '0' }}>
          <Grid.Column width={props.columnWidth} style={{ padding: '0' }}>
            <Image
              fluid
              src={process.env.PUBLIC_URL + '/images/denver-banner.jpg'}
            />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" className="columnTextRight" style={{ padding: '1rem 5rem', margin: '0' }}>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
