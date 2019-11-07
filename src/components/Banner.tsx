import React from 'react';
import { Segment, Responsive } from 'semantic-ui-react';
import { BannerContent } from './BannerContent';

export function Banner() {
  return (
    <>
      {/* This segment fixes the header spacing on the home page*/}
      <Segment style={{ padding: '0' }} />

      <Segment inverted vertical style={{ padding: '0' }}>
        <>
          <Responsive minWidth={1024}>
            <BannerContent columnWidth={8} />
          </Responsive>

          <Responsive maxWidth={1023}>
            <BannerContent columnWidth={16} />
          </Responsive>
        </>
      </Segment>
    </>
  );
}
