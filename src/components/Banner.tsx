import React from 'react';
import { Header, Segment, Responsive } from 'semantic-ui-react';
import { BannerContent } from './BannerContent';

export function Banner() {
  return (
    <>
      {/* This segment fixes the header spacing on the home page*/}
      <Segment style={{ padding: '0em' }} />

      <Segment inverted vertical style={{ padding: '0em' }}>
        <>
          <Responsive minWidth={1024}>
            <BannerContent columnWidth={8} />
          </Responsive>

          <Responsive maxWidth={1023}>
            <BannerContent columnWidth={16} />
          </Responsive>
        </>
      </Segment>
      <Segment textAlign="center" style={{ padding: '0em' }}>
        <Header
          style={{ margin: '1em' }}
          as="h4"
          content="Want to stay up to date on civic tech in Colorado?  Join our newsletter!"
        />
        <iframe
          style={{
            minWidth: '320px',
            minHeight: '250px',
            border: 0
          }}
          title="Newsletter Title"
          src="https://cdn.forms-content.sg-form.com/30a57480-d5c4-11e9-b817-16af1fe961e5"
        />
      </Segment>
    </>
  );
}
