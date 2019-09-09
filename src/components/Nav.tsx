import React, { useState, Dispatch, SetStateAction } from "react";
import { Menu, Responsive, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { PathURL, ExternalURL } from "./Router";
import { NavMenuItems } from "./NavMenuItems";
import { NavSidebar } from "./NavSidebar";

export function Nav(props: any) {
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <>
      <Responsive minWidth={768}>
        <Menu pointing stackable secondary className='bg-white navHeader'>
          <Link to='/'>
            <img
              className='navLogo'
              alt='Code for Denver Logo'
              src={
                process.env.PUBLIC_URL + "/images/logos/Horizontal Logo_red.png"
              }
            />
          </Link>
          <NavMenuItems />
        </Menu>
        {props.children}
      </Responsive>

      <Responsive maxWidth={767}>
        <Menu pointing secondary className='bg-white navHeader'>
          <Link to='/'>
            <img
              className='navLogo'
              alt='Code for Denver Logo'
              src={
                process.env.PUBLIC_URL + "/images/logos/Horizontal Logo_red.png"
              }
            />
          </Link>
          <Menu.Item
            as={Button}
            exact
            position='right'
            activeClassName='active'
            onClick={() => setVisible(!visible)}
          >
            <Icon name='bars' />
          </Menu.Item>
        </Menu>
        <NavSidebar
          visible={visible}
        >
          {props.children}
        </NavSidebar>
      </Responsive>
    </>
  );
}
