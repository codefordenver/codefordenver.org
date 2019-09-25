import React from 'react';
import { PathURL, ExternalURL } from './Router';
import { NavHashLink } from 'react-router-hash-link';

export function NavMenuItems() {
  return (
    <>
      <div>
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
          <b>Donate</b>
        </a>
      </div>
    </>
  );
}
