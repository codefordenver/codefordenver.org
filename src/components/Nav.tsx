import React, { useState, MouseEvent } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { HOME, ABOUT, VOLUNTEER, PROJECTS } from "./Router";

export function Nav(router: RouteComponentProps) {
  const activeItem = router.location.pathname;

  return (
    <Menu pointing stackable secondary>
      <Menu.Item>
        <img src='https://react.semantic-ui.com/logo.png' />
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={HOME}
        position='right'
        active={activeItem === HOME}
      >
        Home
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={ABOUT}
        active={activeItem === ABOUT}
      >
        About
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={PROJECTS}
        active={activeItem === PROJECTS}
      >
        Projects
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={VOLUNTEER}
        active={activeItem === VOLUNTEER}
      >
        Volunteer
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={`${PROJECTS}/project_one`}
        active={activeItem === `${PROJECTS}/project_one`}
      >
        Example Project 1
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={`${PROJECTS}/project_two`}
        active={activeItem === `${PROJECTS}/project_two`}
      >
        Example Project 2
      </Menu.Item>
    </Menu>
  );
}
