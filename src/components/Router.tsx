import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Loader, Segment } from "semantic-ui-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Volunteer } from "../pages/Volunteer";
import { Projects } from "../pages/Projects";
import { Project } from "../pages/ProjectDetail";
import useAxios from "axios-hooks";
import ContentfulContext from "../context/contentful";

export enum PathURL {
  HOME = "/",
  HOME_US = "/#Us",
  HOME_FEATURED = "/#Featured",
  ABOUT = "/about",
  ABOUT_ORGANIZATION = "/about#Organization",
  ABOUT_SPONSORS = "/about#Sponsors",
  ABOUT_CONTACT = "/about#Contact",
  VOLUNTEER = "/volunteer",
  VOLUNTEER_CULTURE = "/volunteer#Culture",
  VOLUNTEER_HOW = "/volunteer#How",
  VOLUNTEER_JOIN = "/volunteer#Join",
  VOLUNTEER_FAQ = "/volunteer#FAQ",
  PROJECTS = "/projects",
  RESOURCES = "",
  RESOURCES_CURRENT_PROJECTS = "",
  RESOURCES_MEMBERS = "",
}

export enum ExternalURL {
  GITHUB = "https://github.com/codefordenver",
  MEETUP = "https://www.meetup.com/CodeForDenver/",
  OPEN_COLLECTIVE = "https://opencollective.com/codefordenver",
  FACEBOOK = "https://www.facebook.com/codefordenver/",
}

export function AppRouter() {
  const [{ data, loading, error }] = useAxios(
    `${process.env.REACT_APP_CONTENTFUL_ENDPOINT}`
  );

  if (error)
    return (
      <Container style={{ textAlign: "center" }}>
        <pre>{error.message}</pre>
      </Container>
    );

  return (
    <Router>
      <ContentfulContext.Provider value={data}>
        <Nav>
          <Segment
            style={{ padding: "10em 0", display: loading ? "block" : "none" }}
          >
            <Loader active={loading} />
          </Segment>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/volunteer' exact component={Volunteer} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/projects/:name' component={Project} />
          </Switch>
          <Route component={Footer} />
        </Nav>
      </ContentfulContext.Provider>
    </Router>
  );
}
