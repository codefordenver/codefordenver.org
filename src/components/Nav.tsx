import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { PathURL, ExternalURL } from "./Router";

export function Nav(router: RouteComponentProps) {
  const activeItem = router.location.pathname;

  return (
    <Menu pointing stackable secondary className='bg-white navHeader'>
      <Link to='/'>
        <img
          className='navLogo'
          alt='Code for Denver Logo'
          src={process.env.PUBLIC_URL + "/images/logos/Horizontal Logo_red.png"}
        />
      </Link>

      <Menu.Item
        as={Link}
        to={PathURL.HOME}
        position='right'
        active={activeItem === PathURL.HOME}
        className='navItem'
      >
        Home
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={PathURL.ABOUT}
        active={activeItem === PathURL.ABOUT}
        className='navItem'
      >
        About
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={PathURL.VOLUNTEER}
        active={activeItem === PathURL.VOLUNTEER}
        className='navItem'
      >
        Volunteer
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={PathURL.PROJECTS}
        active={activeItem === PathURL.PROJECTS}
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
    </Menu>
  );
}
