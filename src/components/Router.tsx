import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Volunteer } from '../pages/Volunteer';
import { Projects } from '../pages/Projects';
import useAxios from 'axios-hooks';
import ContentfulContext from '../context/contentful';
import '../component-styles/Nav.scss';

export enum PathURL {
  HOME = '/',
  HOME_US = '/#us',
  HOME_FEATURED = '/#featured',
  ABOUT = '/about',
  ABOUT_ORGANIZATION = '/about#organization',
  ABOUT_SPONSORS = '/about#sponsors',
  ABOUT_CONTACT = '/about#contact',
  VOLUNTEER = '/volunteer',
  VOLUNTEER_CULTURE = '/volunteer#culture',
  VOLUNTEER_HOW = '/volunteer#how',
  VOLUNTEER_JOIN = '/volunteer#join',
  VOLUNTEER_FAQ = '/volunteer#faq',
  PROJECTS = '/projects',
  PROJECTS_FEATURED = '/projects#featured',
  PROJECTS_0 = '/projects#project0',
  PROJECTS_1 = '/projects#project1',
  PROJECTS_2 = '/projects#project2',
  RESOURCES = '',
  RESOURCES_CURRENT_PROJECTS = '',
  RESOURCES_MEMBERS = ''
}

export enum ExternalURL {
  GITHUB = 'https://github.com/codefordenver',
  MEETUP = 'https://www.meetup.com/CodeForDenver/',
  OPEN_COLLECTIVE = 'https://opencollective.com/codefordenver',
  FACEBOOK = 'https://www.facebook.com/codefordenver/',
  WORKABILITY = 'https://workability.works/',
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
            </Switch>
          </div>
          <Route component={Footer} />
        </Nav>
      </ContentfulContext.Provider>
    </Router>
  );
}
