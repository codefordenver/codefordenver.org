import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { PathURL, ExternalURL } from "./Router";

export function NavMenuItems() {
  return (
    <>
      <Menu.Item
        as={NavLink}
        exact
        to={PathURL.HOME}
        position='right'
        activeClassName='active'
        className='navItem'
      >
        Home
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={PathURL.ABOUT}
        activeClassName='active'
        className='navItem'
      >
        About
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={PathURL.VOLUNTEER}
        activeClassName='active'
        className='navItem'
      >
        Volunteer
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={PathURL.PROJECTS}
        activeClassName='active'
        className='navItem'
      >
        Featured Projects
      </Menu.Item>

      <Menu.Item className='navItem'>
        <Button
          as='a'
          href={ExternalURL.OPEN_COLLECTIVE}
          circular
          basic
          color='red'
          size='mini'
        >
          <strong>Donate</strong>
        </Button>
      </Menu.Item>
    </>
  );
}
