import React from 'react';
import { Segment, Responsive } from 'semantic-ui-react';
import { VolunteerContent } from './VolunteerContent';

export function Volunteer() {
  return (
    <Segment
      inverted
      color="red"
      vertical
      style={{ padding: '0em', margin: '0 0 5rem 0' }}
    >
      <>
        <Responsive minWidth={1024}>
          <VolunteerContent columnWidth={8} />
        </Responsive>

        <Responsive maxWidth={1023}>
          <VolunteerContent columnWidth={16} />
        </Responsive>
      </>
    </Segment>
  );
}
