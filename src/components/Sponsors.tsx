import React from 'react';
import { ExternalURL } from './Router';
import '../component-styles/Sponsors.scss';

type Props = {
  show?: boolean;
};

export function Sponsors(props: Props) {
  return (
    <>
      <div className="page">
        <h2 hidden={!props.show}>Our sponsors</h2>
        <div className="row">
          <a href={ExternalURL.GARYCOMMUNITY}>
            <img
              alt="Gary Community Investments Logo"
              src={
                process.env.PUBLIC_URL +
                '/images/sponsors/sponsor-gary_community_investments-300x236.png'
              }
            />
          </a>
          <a href={ExternalURL.WORKABILITY}>
            <img
              alt="Workability Logo"
              src={process.env.PUBLIC_URL + '/images/sponsors/workAbility.png'}
            />
          </a>
          <a href={ExternalURL.JETBRAINS}>
            <img
              alt="Jetbrains Logo"
              src={
                process.env.PUBLIC_URL +
                '/images/sponsors/jetbrains-variant-4-700x391.png'
              }
            />
          </a>
        </div>
      </div>
    </>
  );
}
