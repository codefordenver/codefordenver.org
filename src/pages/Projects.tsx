
import React, { useContext } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import ContentfulContext from '../context/contentful';
import get from 'lodash.get';
import { contentfulDataMapper } from '../helpers';
import { Header } from 'semantic-ui-react';

export function Projects() {
  const content = useContext(ContentfulContext);
  if (content) {
    const items = get(content, 'items', []).slice(0, 3);
    const assets = get(content, 'includes.Asset', []);

    return (
      <div className="bg-white">
        <Header
          style={{ margin: "3vh 10vw 0.5vh", fontSize: "2rem" }}
          as="h1"
          size="huge">
          Featured Projects
        </Header>
        <article style={{border:'none'}}>
          {items.map((c: any, i: number) => (
            <ProjectCard key={i} {...contentfulDataMapper(c, assets)} />
          ))}
        </article>

      </div>
    );
  }
  return null;
}
