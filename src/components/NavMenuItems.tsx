import React, { useEffect } from 'react';
import { PathURL, ExternalURL } from './Router';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function NavMenuItems() {
  useEffect(() => {
    let navTop = document.getElementById('nav-top');
    document.addEventListener('click', handleDocumentClick);
    if (navTop != null) {
      navTop.addEventListener('transitionend', handleTransitionEnd);
    }
    return () => {
      let navTop = document.getElementById('nav-top');
      document.removeEventListener('click', handleDocumentClick);
      if (navTop != null) {
        navTop.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  });

  function handleDocumentClick(e: Event) {
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
      hideNav();
    }
  }

  function toggleNav() {
    let nav = document.getElementById('nav-navigation');
    let navTop = document.getElementById('nav-top');
    if (navTop != null && nav != null) {
      navTop.classList.add('nav-animatable');
      nav.classList.toggle('visible');
      if (nav.classList.contains('visible')) {
        document.addEventListener('click', handleDocumentClick);
        window.addEventListener('resize', handleResize);
      } else {
        document.removeEventListener('click', handleDocumentClick);
        window.removeEventListener('resize', handleResize);
      }
    }
  }

  function hideNav() {
    let nav = document.getElementById('nav-navigation');
    let navTop = document.getElementById('nav-top');
    if (navTop != null && nav != null) {
      navTop.classList.add('nav-animatable');
      nav.classList.remove('visible');
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
    }
  }

  function handleResize() {
    let navTop = document.getElementById('nav-top');
    if (window.outerWidth > 720 && navTop != null) {
      hideNav();
      navTop.classList.remove('nav-animatable');
    }
  }

  function handleTransitionEnd() {
    let navTop = document.getElementById('nav-top');
    if (navTop != null) {
      navTop.classList.remove('nav-animatable');
    }
  }

  return (
    <>
      <span id="nav-trigger" onClick={toggleNav}>
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
            onClick={hideNav}
          >
            Home
          </NavHashLink>
          <NavHashLink
            to={PathURL.ABOUT}
            activeClassName="active-nav-button"
            className="nav-button"
            onClick={hideNav}
          >
            About
          </NavHashLink>
          <NavHashLink
            to={PathURL.VOLUNTEER}
            activeClassName="active-nav-button"
            className="nav-button"
            onClick={hideNav}
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
