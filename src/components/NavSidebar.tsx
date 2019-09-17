import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { NavMenuItems } from './NavMenuItems';
import { ISidebar } from './Nav';

export function NavSidebar(props: ISidebar) {
  return (
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          vertical
          visible={props.visible}
          onHide={props.hideSidebar}
          direction="right"
        >
          <NavMenuItems hideSidebar={props.hideSidebar} />
        </Sidebar>

        <Sidebar.Pusher>{props.children}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}
