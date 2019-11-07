import React from 'react';
import { Segment, Responsive } from 'semantic-ui-react';
import { NewsletterContent } from './NewsletterContent';

export function Newsletter() {
  return (
    <>
      <Segment style={{ padding: '0em' }}>
        <>
          <Responsive minWidth={1024}>
            <NewsletterContent columnWidth={8} />
          </Responsive>

          <Responsive maxWidth={1023}>
            <NewsletterContent columnWidth={16} />
          </Responsive>
        </>
      </Segment>
    </>
  );
}
