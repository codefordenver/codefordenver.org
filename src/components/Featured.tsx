import React, { useContext } from 'react';
import ContentfulContext from '../context/contentful';
import get from 'lodash.get';
import { contentfulDataMapper } from '../helpers';
import { HashLink } from 'react-router-hash-link';

interface IProject {
  title: string;
  shortDescription: string;
  thumbnail: string;
  link: string;
  projId: string;
}

const Project = (props: IProject) => (
  <span className="project">
    <HashLink
      className="hash_link_white"
      aria-label={`${props.title} project link`}
      to={`/projects/#${props.projId}`}
      scroll={(el: Element) =>
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    >
      <img alt={`${props.title} Project Logo`} src={props.thumbnail} />
      <h4>{props.title}</h4>
      <p>{props.shortDescription}</p>
    </HashLink>
  </span>
);

export function Featured() {
  const content = useContext(ContentfulContext);

  if (content) {
    const items = get(content, 'items', []).slice(0, 3);
    const assets = get(content, 'includes.Asset', []);

    return (
      <div id="featured">
        <div className="inverted text">
          <h2>Featured Projects</h2>
          <div className="row">
            {items.map((c: any, i: number) => (
              <Project
                key={i}
                {...contentfulDataMapper(c, assets)}
                projId={`${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
