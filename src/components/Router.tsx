import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Volunteer } from "../pages/Volunteer";
import { Projects } from "../pages/Projects";
import { Project } from "../pages/ProjectDetail";

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
  return (
    <Router>
      <div>
        <Route component={Nav} />
        <Container className="bg-white">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/volunteer' exact component={Volunteer} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/projects/:name' component={Project} />
          </Switch>
        </Container>
        <Route component={Footer} />
      </div>
    </Router>
  );
}
