import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { PathURL, ExternalURL } from "./Router";

export function Nav(router: RouteComponentProps) {
  const activeItem = router.location.pathname;

  return (
    <Menu pointing stackable secondary className="bg-white">
        <Menu.Item>
          <Link to="/">
            <img style={{width: '100px', height:'auto'}} src={process.env.PUBLIC_URL + '/images/logos/Horizontal Logo_red.png'} />
          </Link>
        </Menu.Item>

        <Menu.Item
          as={Link}
          to={PathURL.HOME}
          position='right'
          active={activeItem === PathURL.HOME}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to={PathURL.ABOUT}
          active={activeItem === PathURL.ABOUT}
        >
          About
        </Menu.Item>

        <Menu.Item
          as={Link}
          to={PathURL.VOLUNTEER}
          active={activeItem === PathURL.VOLUNTEER}
        >
          Volunteer
        </Menu.Item>

        <Menu.Item
          as={Link}
          to={PathURL.PROJECTS}
          active={activeItem === PathURL.PROJECTS}
        >
          Featured Projects
        </Menu.Item>

        <Menu.Item>
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
