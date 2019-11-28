import React from 'react';
import { Link } from 'react-router-dom';
import { PathURL } from '../components/Router';

export function Projects() {
  return (
    <>
      <Link to={`${PathURL.PROJECTS}/project_one`}>Example Project 1</Link>

      <Link to={`${PathURL.PROJECTS}/project_two`}>Example Project 2</Link>
    </>
  );
}
