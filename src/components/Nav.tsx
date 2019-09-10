import React from "react";
import {
  Menu,
  Responsive,
  Button,
  Icon,
  SemanticICONS,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { NavMenuItems } from "./NavMenuItems";
import { NavSidebar } from "./NavSidebar";

export function Nav(props: any) {
  const [visible, setVisible] = React.useState<boolean>(false);
  const icon: SemanticICONS = visible ? "arrow right" : "bars";

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
            position='right'
            onClick={() => setVisible(!visible)}
          >
            <Icon name={icon} />
          </Menu.Item>
        </Menu>
        <NavSidebar visible={visible}>{props.children}</NavSidebar>
      </Responsive>
    </>
  );
}
