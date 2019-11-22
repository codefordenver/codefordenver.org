import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

export function AboutBanner() {
  return (
    <div>
      <div id="about-header">
        <h2>About</h2>
      </div>
      <div
        id="banner"
        className="desktop-only"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/about-banner.jpeg")`
        }}
      >
        <h3 className="secondary-text mission">
          An intentionally inclusive community of problem solvers
        </h3>
      </div>
    </div>
  );
}
