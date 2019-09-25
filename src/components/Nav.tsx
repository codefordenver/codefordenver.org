import React from 'react';
import { NavMenuItems } from './NavMenuItems';
import { PathURL } from './Router';
import { NavHashLink } from 'react-router-hash-link';

export interface ISidebar extends ISidebarClose {
  children: any;
  visible: boolean;
}

export interface ISidebarClose {
  hideSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Nav(props: any) {
  return (
    <>
      <div id="nav-top">
        <NavHashLink to={PathURL.HOME}>
          <img
            id="nav-logo"
            alt="Code for Denver logo"
            src={
              process.env.PUBLIC_URL + '/images/logos/Horizontal Logo_red.png'
            }
          />
        </NavHashLink>
        <NavMenuItems />
      </div>
      {props.children}
    </>
  );
}
