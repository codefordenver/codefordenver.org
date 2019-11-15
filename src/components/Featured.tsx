import React, { useContext } from 'react';
import ContentfulContext from '../context/contentful';
import get from 'lodash.get';
import { contentfulDataMapper } from '../helpers';
import '../component-styles/Featured-Project.scss';

interface IProject {
  title: string;
  shortDescription: string;
  thumbnail: string;
}

const Project = (props: IProject) => (
  <span className="project">
    <img alt="Project Logo" src={props.thumbnail} />
    <h4>{props.title}</h4>
    <p>{props.shortDescription}</p>
  </span>
);

export function Featured() {
  const content = useContext(ContentfulContext);

  if (content) {
    const items = get(content, 'items', []).slice(0, 3);
    const assets = get(content, 'includes.Asset', []);

    return (
      <div className="inverted text">
        <h2>Featured Projects</h2>
        <div id="Featured" className="row">
          {items.map((c: any, i: number) => (
            <Project key={i} {...contentfulDataMapper(c, assets)} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
