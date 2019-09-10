import React from "react";
import {
  Menu,
  Sidebar,
} from "semantic-ui-react";
import { NavMenuItems } from "./NavMenuItems";

export function NavSidebar(props: any) {
  return (
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          vertical
          visible={props.visible}
          direction='right'
        >
          <NavMenuItems />
        </Sidebar>

        <Sidebar.Pusher>{props.children}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}
