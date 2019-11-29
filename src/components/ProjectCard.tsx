import React from 'react';
import '../component-styles/ProjectCard.scss';

type Props = {
  projId: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  partner: string;
  link: string;
  tech: string;
  screenShots: string[];
};

export function ProjectCard(props: Props) {
  const ScreenShots = (shot: string, i: number) => (
    <div key={i}>
      <img
        src={shot}
        alt={`${props.title} project screenshots`}
        className="screen-shot-image"
      />
    </div>
  );
  return (
    <div className="project-card" id={props.projId}>
      <section className="top-section">
        <div className="two-col-grid">
          <span>
            <h3 className="secondary-text">Project</h3>
            <h2>{props.title}</h2>
            <h3 className="secondary-text">Sponsor</h3>
            <p>{props.partner}</p>
          </span>
          <span>
            <img
              src={props.thumbnail}
              alt={`${props.title} project logo`}
              className="logo-img"
            />
          </span>
        </div>
        <div className="spacing">
          <p>{props.shortDescription}</p>
        </div>
        <h4>Technology and Tools Used:</h4>
        <p>{props.tech}</p>
      </section>
      <section className="secondary screen-shot-section">
        <h3 className="white">{props.title} Screenshots</h3>
        <div className="row">
          {props.screenShots.map((shot: any, i: number) =>
            ScreenShots(shot, i)
          )}
        </div>
      </section>
    </div>
  );
}
