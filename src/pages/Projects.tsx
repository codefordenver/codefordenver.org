import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { PathURL } from '../components/Router';

export function Projects() {
  return (
    <>
      <Menu.Item as={Link} to={`${PathURL.PROJECTS}/project_one`}>
        Example Project 1
      </Menu.Item>

      <Menu.Item as={Link} to={`${PathURL.PROJECTS}/project_two`}>
        Example Project 2
      </Menu.Item>
    </>
  );
}
