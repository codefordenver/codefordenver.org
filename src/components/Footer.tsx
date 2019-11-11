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

export function Footer(router: RouteComponentProps) {
  const social__css: CSSProperties = { color: 'white', opacity: 0.9 };
  const meetup__css: CSSProperties = {
    color: '#E14E54',
    opacity: 0.9,
    textDecoration: 'underline'
  };

  return (
    <>
      <div id="footer-container" className="inverted">
        <div id="footer-text" className="text">
          <p>We meet on most Monday nights. Join us, everyone is welcome!</p>
          <p>
            RSVP on our{' '}
            <a style={meetup__css} href={ExternalURL.MEETUP}>
              Meetup
            </a>{' '}
            page to see the full schedule of events and to let us know you’re
            coming.
          </p>

          <a style={social__css} href={ExternalURL.MEETUP}>
            <FontAwesomeIcon icon={faMeetup} />
          </a>

          <a style={social__css} href={ExternalURL.GITHUB}>
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a style={social__css} href={ExternalURL.FACEBOOK}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <span id="footer-links">
          <span>
            <h4>Home</h4>
            <ul>
              <li>
                <a href={PathURL.HOME_US}>What We Do</a>
              </li>
              <li>
                <a href={PathURL.HOME_FEATURED}>Featured Projects</a>
              </li>
            </ul>
          </span>
          <span>
            <h4>About</h4>
            <ul>
              <li>
                <a href={PathURL.ABOUT_ORGANIZATION}>Organizations</a>
              </li>
              <li>
                <a href={PathURL.ABOUT_SPONSORS}>Sponsors</a>
              </li>
              <li>
                <a href={PathURL.ABOUT_CONTACT}>Contact</a>
              </li>
            </ul>
          </span>
          <span>
            <h4>Volunteer</h4>
            <ul>
              <li>
                <a href={PathURL.VOLUNTEER_CULTURE}>Culture</a>
              </li>
              <li>
                <a href={PathURL.VOLUNTEER_HOW}>How We Work</a>
              </li>
              <li>
                <a href={PathURL.VOLUNTEER_JOIN}>Join</a>
              </li>
              <li>
                <a href={PathURL.VOLUNTEER_FAQ}>FAQ</a>
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
