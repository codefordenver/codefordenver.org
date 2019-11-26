import React, { CSSProperties } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PathURL, ExternalURL } from './Router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faMeetup
} from '@fortawesome/free-brands-svg-icons';
import '../component-styles/Footer.scss';
import { HashLink } from 'react-router-hash-link';
import { FooterLink } from './FooterLink';

export function Footer(router: RouteComponentProps) {
  const social__css: CSSProperties = { color: 'white', opacity: 0.9 };
  const meetup__css: CSSProperties = {
    color: '#E14E54',
    opacity: 0.9,
    textDecoration: 'underline'
  };

  return (
    <>
      <div id="footer-container" className="inverted text">
        <div id="footer-text">
          <p>We meet on most Monday nights. Join us, everyone is welcome!</p>
          <p>
            RSVP on our{' '}
            <a style={meetup__css} href={ExternalURL.MEETUP}>
              Meetup
            </a>{' '}
            page to see the full schedule of events and to let us know you’re
            coming.
          </p>
          <span className="social-links">
            <a style={social__css} href={ExternalURL.MEETUP}>
              <FontAwesomeIcon icon={faMeetup} />
            </a>

            <a style={social__css} href={ExternalURL.GITHUB}>
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a style={social__css} href={ExternalURL.FACEBOOK}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </span>
        </div>
        <span id="footer-links">
          <span>
            <h4>Home</h4>
            <ul>
              <li>
                <FooterLink to={PathURL.HOME_US} text="What We Do" />
              </li>
              <li>
                <FooterLink
                  to={PathURL.HOME_FEATURED}
                  text="Featured Projects"
                />
              </li>
            </ul>
          </span>
          <span>
            <h4>About</h4>
            <ul>
              <li>
                <FooterLink
                  to={PathURL.ABOUT_ORGANIZATION}
                  text="Organization"
                />
              </li>
              <li>
                <FooterLink to={PathURL.ABOUT_SPONSORS} text="Sponsors" />
              </li>
              <li>
                <FooterLink to={PathURL.ABOUT_CONTACT} text="Contact" />
              </li>
            </ul>
          </span>
          <span>
            <h4>Volunteer</h4>
            <ul>
              <li>
                <FooterLink to={PathURL.VOLUNTEER_HOW} text="How We Work" />
              </li>
              <li>
                <FooterLink to={PathURL.VOLUNTEER_CULTURE} text="Culture" />
              </li>
              <li>
                <FooterLink to={PathURL.VOLUNTEER_JOIN} text="Join Us" />
              </li>
              <li>
                <FooterLink to={PathURL.VOLUNTEER_FAQ} text="FAQ" />
              </li>
            </ul>
          </span>
          <span>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href={ExternalURL.GITHUB}>GitHub</a>
              </li>
              <li>
                <a href={PathURL.RESOURCES_MEMBERS}>Members</a>
              </li>
            </ul>
          </span>
        </span>
      </div>
    </>
  );
}
