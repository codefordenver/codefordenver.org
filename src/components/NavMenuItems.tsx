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
    let navTop = document.getElementById('nav-top');
    document.addEventListener('click', this.handleDocumentClick);
    if (navTop != null) {
      navTop.addEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  componentWillUnmount() {
    let navTop = document.getElementById('nav=top');
    document.removeEventListener('click', this.handleDocumentClick);
    if (navTop != null) {
      navTop.removeEventListener('transitionend', this.handleTransitionEnd);
    }
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
    let navTop = document.getElementById('nav-top');
    if (navTop != null && nav != null) {
      navTop.classList.add('nav-animatable');
      nav.classList.toggle('visible');
      if (nav.classList.contains('visible')) {
        document.addEventListener('click', this.handleDocumentClick);
        window.addEventListener('resize', this.handleResize);
      } else {
        document.removeEventListener('click', this.handleDocumentClick);
        window.removeEventListener('resize', this.handleResize);
      }
    }
  };

  hideNav = () => {
    let nav = document.getElementById('nav-navigation');
    let navTop = document.getElementById('nav-top');
    if (navTop != null && nav != null) {
      navTop.classList.add('nav-animatable');
      nav.classList.remove('visible');
      document.removeEventListener('click', this.handleDocumentClick);
      window.removeEventListener('resize', this.handleResize);
    }
  };

  handleResize = () => {
    let navTop = document.getElementById('nav-top');
    if (window.outerWidth > 720 && navTop != null) {
      this.hideNav();
      navTop.classList.remove('nav-animatable');
    }
  };

  handleTransitionEnd = () => {
    let navTop = document.getElementById('nav-top');
    if (navTop != null) {
      navTop.classList.remove('nav-animatable');
    }
  };
}
