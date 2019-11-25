import React from 'react';
import { PathURL, ExternalURL } from './Router';
import { HashLink } from 'react-router-hash-link';

export function AboutOrg() {
  return (
    <div className="page">
      <div className="two-col-grid">
        <div>
          <h3>Our Organization</h3>
          <p>
            We are a Code for America Brigade community with regular meetups and
            other events to help bring together creative problem solvers with
            local community groups and government trying to address some of our
            most pressing 21st century problems.
          </p>
          <a className="pill-button inverted" href={PathURL.VOLUNTEER}>
            Join Us
          </a>
        </div>
        <div>
          <h3>Our Vision</h3>
          <p>
            The Denver Community will be better served by empowering local
            governments and nonprofits through technology.
          </p>
        </div>
        <div id="our-sponsors">
          <h3>Our Sponsors</h3>
          <p>
            We couldn’t do any of this work without our sponsors. If you’d like
            to learn more about how to support Code for Denver,
            <HashLink
              to="/About#contact"
              style={{ color: ' #E14E54' }}
              scroll={el =>
                el.scrollIntoView({ behavior: 'smooth', block: 'end' })
              }
            >
              {' '}
              contact us
            </HashLink>
            .
          </p>
          <a
            className="pill-button inverted"
            href={ExternalURL.OPEN_COLLECTIVE}
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}
