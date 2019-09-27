import React from 'react';
import { PathURL, ExternalURL } from './Router';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export class NavMenuItems extends React.Component {
  render() {
    return (
      <>
        <span id="nav-trigger" onClick={this.toggleNav}>
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
              onClick={this.hideNav}
            >
              Home
            </NavHashLink>
            <NavHashLink
              to={PathURL.ABOUT}
              activeClassName="active-nav-button"
              className="nav-button"
              onClick={this.hideNav}
            >
              About
            </NavHashLink>
            <NavHashLink
              to={PathURL.VOLUNTEER}
              activeClassName="active-nav-button"
              className="nav-button"
              onClick={this.hideNav}
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

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = (e: Event) => {
    let nav = document.getElementById('nav-navigation');
    let navTrigger = document.getElementById('nav-trigger');
    if (
      nav != null &&
      e.target instanceof Element &&
      !nav.contains(e.target as Element) &&
      navTrigger != null &&
      !navTrigger.contains(e.target) &&
      navTrigger !== e.target
    ) {
      this.hideNav();
    }
  };

  toggleNav = () => {
    let nav = document.getElementById('nav-navigation');
    if (nav != null) {
      nav.classList.toggle('visible');
      if (nav.classList.contains('visible')) {
        document.addEventListener('click', this.handleDocumentClick);
      } else {
        document.removeEventListener('click', this.handleDocumentClick);
      }
    }
  };

  hideNav = () => {
    let nav = document.getElementById('nav-navigation');
    if (nav != null) {
      nav.classList.remove('visible');
      document.removeEventListener('click', this.handleDocumentClick);
    }
  };
}
