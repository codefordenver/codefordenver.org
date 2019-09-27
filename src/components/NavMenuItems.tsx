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
        <div id="nav-navigation">
          <div id="nav-buttons">
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
    let navButtons = document.getElementById('nav-buttons');
    if (nav != null && navButtons != null) {
      nav.classList.toggle('visible');
      if (nav.style.maxHeight === '') {
        nav.style.maxHeight = navButtons.clientHeight.toString() + 'px';
        document.addEventListener('click', this.handleDocumentClick);
        window.addEventListener('resize', this.handleResize);
      } else {
        nav.style.maxHeight = '';
        document.removeEventListener('click', this.handleDocumentClick);
        window.removeEventListener('resize', this.handleResize);
      }
    }
  };

  hideNav = () => {
    let nav = document.getElementById('nav-navigation');
    let navButtons = document.getElementById('nav-buttons');
    if (nav != null && navButtons != null) {
      nav.style.maxHeight = '';
      nav.classList.remove('visible');
      document.removeEventListener('click', this.handleDocumentClick);
      window.removeEventListener('resize', this.handleResize);
    }
  };

  handleResize = () => {
    if (window.outerWidth > 720) {
      this.hideNav();
    }
  };
}
