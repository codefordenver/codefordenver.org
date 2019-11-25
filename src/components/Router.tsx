import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Volunteer } from '../pages/Volunteer';
import { Projects } from '../pages/Projects';
import { Project } from '../pages/ProjectDetail';
import useAxios from 'axios-hooks';
import ContentfulContext from '../context/contentful';
import '../component-styles/Nav.scss';

export enum PathURL {
  HOME = '/',
  HOME_US = '/#Us',
  HOME_FEATURED = '/#Featured',
  ABOUT = '/about',
  ABOUT_ORGANIZATION = '/about#Organization',
  ABOUT_SPONSORS = '/about#sponsors',
  ABOUT_CONTACT = '/about#contact',
  VOLUNTEER = '/volunteer',
  VOLUNTEER_CULTURE = '/volunteer#Culture',
  VOLUNTEER_HOW = '/volunteer#How',
  VOLUNTEER_JOIN = '/volunteer#Join',
  VOLUNTEER_FAQ = '/volunteer#FAQ',
  PROJECTS = '/projects',
  RESOURCES = '',
  RESOURCES_CURRENT_PROJECTS = '',
  RESOURCES_MEMBERS = ''
}

export enum ExternalURL {
  GITHUB = 'https://github.com/codefordenver',
  MEETUP = 'https://www.meetup.com/CodeForDenver/',
  OPEN_COLLECTIVE = 'https://opencollective.com/codefordenver',
  FACEBOOK = 'https://www.facebook.com/codefordenver/',
  GALVANIZE = 'https://www.galvanize.com',
  GARYCOMMUNITY = 'https://www.garycommunity.org',
  JETBRAINS = 'https://www.jetbrains.com'
}

export function AppRouter() {
  const [{ data, loading, error }] = useAxios(
    `${process.env.REACT_APP_CONTENTFUL_ENDPOINT}`
  );

  if (error)
    return (
      <div>
        <pre>{error.message}</pre>
      </div>
    );

  return (
    <Router>
      <ContentfulContext.Provider value={data}>
        <Nav>
          <div
            style={{
              display: loading ? 'none' : 'block'
            }}
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/volunteer" exact component={Volunteer} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/projects/:name" component={Project} />
            </Switch>
          </div>
          <Route component={Footer} />
        </Nav>
      </ContentfulContext.Provider>
    </Router>
  );
}
