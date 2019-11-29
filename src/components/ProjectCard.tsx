import React from 'react';
import '../component-styles/ProjectCard.scss';

type Props = {
  projId: string;
  title: string;
  description: string;
  thumbnail: string;
  partner: string;
  link: string;
  tech: string;
  screenShots: string[];
};

export function ProjectCard(props: Props) {
  const ScreenShots = (shot: string, i: number) => (
    <div key={i}>
      <a href={shot} aria-label={`${props.title} screen shot blow up`}>
        <img
          src={shot}
          alt={`${props.title} project screenshots`}
          className="screen-shot-image"
        />
      </a>
    </div>
  );
  return (
    <section id={`project${props.projId}`} className="project-card">
      <div className="top-section">
        <div className="two-col-grid">
          <span>
            <h3 className="secondary-text">Project</h3>
            <h2>
              <a aria-label={`${props.title} git hub link`} href={props.link}>
                {props.title}
              </a>
            </h2>
            <h3 className="secondary-text">Sponsor</h3>
            <p>{props.partner}</p>
          </span>
          <span className="logo-container">
            <img
              src={props.thumbnail}
              alt={`${props.title} project logo`}
              className="logo-img"
            />
          </span>
        </div>
        <div className="spacing">
          <p>{props.description}</p>
        </div>
        <h3>Technology and Tools Used:</h3>
        <p>{props.tech}</p>
      </div>
      <div className="secondary screen-shot-section">
        <h2 className="white">{props.title} Screenshots</h2>
        <div className="row">
          {props.screenShots.map((shot: any, i: number) =>
            ScreenShots(shot, i)
          )}
        </div>
      </div>
    </section>
  );
}
