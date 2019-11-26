import React from 'react';
import { HashLink } from 'react-router-hash-link';

export interface IFooterLink {
  to: string;
  text: string;
}

export function FooterLink(props: IFooterLink) {
  return (
    <HashLink
      to={props.to}
      scroll={(el: Element) =>
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    >
      {props.text}
    </HashLink>
  );
}
