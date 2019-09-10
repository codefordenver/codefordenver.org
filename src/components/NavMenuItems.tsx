import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { PathURL, ExternalURL } from './Router';
import { ISidebarClose } from './Nav';

export function NavMenuItems(props: ISidebarClose) {
  return (
    <>
      <Menu.Item
        as={NavLink}
        exact
        to={PathURL.HOME}
        position="right"
        activeClassName="active"
        className="navItem"
        onClick={props.hideSidebar}
      >
        Home
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={PathURL.ABOUT}
        activeClassName="active"
        className="navItem"
        onClick={props.hideSidebar}
      >
        About
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={PathURL.VOLUNTEER}
        activeClassName="active"
        className="navItem"
        onClick={props.hideSidebar}
      >
        Volunteer
      </Menu.Item>

      <Menu.Item className="navItem">
        <Button
          as="a"
          href={ExternalURL.OPEN_COLLECTIVE}
          circular
          basic
          color="red"
          size="mini"
          onClick={props.hideSidebar}
        >
          <strong>Donate</strong>
        </Button>
      </Menu.Item>
    </>
  );
}
