import React, { useContext } from 'react';
import ContentfulContext from '../context/contentful';
import { contentfulDataMapper } from '../helpers';
import get from 'lodash.get';
import { ProjectCard } from '../components/ProjectCard';
//! need to fix header

export function Projects() {
  const content = useContext(ContentfulContext);
  if (content) {
    const items = get(content, 'items', []).slice(0, 3);
    const assets = get(content, 'includes.Asset', []);

    return (
      <div className="bg-white">
        <h1>
          style={{ padding: '1rem 2rem', fontSize: '2rem' }}
          Featured Projects
        </h1>
        <article style={{ border: 'none' }}>
          {items.map((c: any, i: number) => (
            <ProjectCard key={i} {...contentfulDataMapper(c, assets)} />
          ))}
        </article>
      </div>
    );
  }
  return null;
}
