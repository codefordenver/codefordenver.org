import React, { CSSProperties } from 'react';
import { Grid, Image, Header, Segment } from 'semantic-ui-react';
import { ExternalURL } from './Router';

export function Sponsors() {
  const image__css: CSSProperties = {
    margin: '0 auto',
    maxWidth: '250px',
    padding: 0
  };

  return (
    <>
      <h3>Our sponsors</h3>
      <div className="row">
        <a href={ExternalURL.GARYCOMMUNITY}>
          <img
            alt="Gary Community Investments Logo"
            style={image__css}
            src={
              process.env.PUBLIC_URL +
              '/images/sponsors/sponsor-gary_community_investments-300x236.png'
            }
          />
        </a>
        <a href={ExternalURL.GALVANIZE}>
          <img
            alt="Galvanize Logo"
            style={image__css}
            src={process.env.PUBLIC_URL + '/images/sponsors/galvanize.png'}
          />
        </a>
        <a href={ExternalURL.JETBRAINS}>
          <img
            alt="Jetbrains Logo"
            style={image__css}
            src={
              process.env.PUBLIC_URL +
              '/images/sponsors/jetbrains-variant-4-700x391.png'
            }
          />
        </a>
      </div>
    </>
  );
}
