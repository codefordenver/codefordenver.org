import React from "react";
import { List } from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";

export interface IFooterLink {
  to: String;
  text: String;
}

export function FooterLink(props: IFooterLink) {
  return (
    <List.Item
      as={HashLink}
      to={props.to}
      scroll={(el: Element) =>
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    >
      {props.text}
    </List.Item>
  );
}
