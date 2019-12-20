import React, { useContext } from 'react';
import ContentfulContext from '../context/contentful';
import { contentfulDataMapper } from '../helpers';
import get from 'lodash.get';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  const content = useContext(ContentfulContext);
  if (content) {
    const items = get(content, 'items', []).slice(0, 3);
    const assets = get(content, 'includes.Asset', []);

    return (
      <article>
        <h1 style={{ margin: '3vh 0vw 0vh 6vw' }} id="Featured">
          Featured Projects
        </h1>
        {items.map((c: any, i: number) => (
          <ProjectCard
            key={i}
            {...contentfulDataMapper(c, assets)}
            projId={`${i}`}
          />
        ))}
      </article>
    );
  }
  return null;
}
