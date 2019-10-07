
// featured project page
import React, { useContext } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import ContentfulContext from '../context/contentful';
import get from 'lodash.get';
import { contentfulDataMapper } from '../helpers';

export function Projects() {
 
  const content = useContext(ContentfulContext);
  if (content) {
    const items = get(content, 'items', []).slice(0, 3);
    const assets = get(content, 'includes.Asset', []);

    return (
      <article>
              {items.map((c: any, i: number) => (
                <ProjectCard key={i} {...contentfulDataMapper(c, assets)} />
              ))}
      </article>
    );
  }
  return null;

}

