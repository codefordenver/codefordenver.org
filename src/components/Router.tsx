import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  ABOUT = "/about",
  VOLUNTEER = "/volunteer",
  PROJECTS = "/projects",
}

export enum ExternalURL {
  GITHUB = "https://github.com/codefordenver",
  MEETUP = "https://www.meetup.com/CodeForDenver/",
  OPEN_COLLECTIVE = "https://opencollective.com/codefordenver",
  FACEBOOK = "https://www.facebook.com/codefordenver/",
}

export function AppRouter() {
  const [{
    data,
    loading,
    error
  }] = useAxios(`${process.env.REACT_APP_CONTENTFUL_ENDPOINT}`)

  if (error) return (
      <Container style={{ textAlign: "center" }}>
        <pre>
          { error.message }
        </pre>
      </Container>
  )

  return (
    <Router>
      <ContentfulContext.Provider value={ data }>
        <Route component={Nav} />
          <Segment style={{ padding: "10em 0", display: loading ? 'block': 'none' }}>
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
      </ContentfulContext.Provider>
    </Router>
  );
}
