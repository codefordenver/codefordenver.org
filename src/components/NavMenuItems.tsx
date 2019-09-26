import React from 'react';
import { PathURL, ExternalURL } from './Router';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function NavMenuItems() {
  return (
    <>
      <span id="nav-trigger">
        <FontAwesomeIcon icon={faBars} />
        <span>Menu</span>
      </span>
      <div id="nav-navigation" className="collapsed">
        <div id="nav-buttons" className="visible">
          <NavHashLink
            exact
            to={PathURL.HOME}
            activeClassName="active-nav-button"
            className="nav-button"
          >
            Home
          </NavHashLink>
          <NavHashLink
            to={PathURL.ABOUT}
            activeClassName="active-nav-button"
            className="nav-button"
          >
            About
          </NavHashLink>
          <NavHashLink
            to={PathURL.VOLUNTEER}
            activeClassName="active-nav-button"
            className="nav-button"
          >
            Volunteer
          </NavHashLink>
          <a
            id="donate-button"
            className="pill-button"
            href={ExternalURL.OPEN_COLLECTIVE}
          >
            Donate
          </a>
        </div>
      </div>
    </>
  );
}
