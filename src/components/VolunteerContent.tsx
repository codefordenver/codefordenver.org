import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

export function VolunteerContent(props: any) {
  return (
    <Grid columns="equal" stackable>
      <Grid.Row id="Us" style={{ padding: '0em' }}>
        <Grid.Column
          verticalAlign="middle"
          className="columnTextLeft"
        ></Grid.Column>
        <Grid.Column width={props.columnWidth} style={{ padding: '0em' }}>
          <Image />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
