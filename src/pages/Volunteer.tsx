import React from 'react';
import { ExternalURL } from '../components/Router';
import '../page-styles/Volunteer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faMeetup
} from '@fortawesome/free-brands-svg-icons';

export function Volunteer() {
  return (
    <>
      <div className="page">
        <h2>Volunteer</h2>
        <div className="iframe-parent">
          <div className="iframe-container">
            <iframe
              title="Code for Denver - The 2016 Story Video"
              src="https://player.vimeo.com/video/167822653?title=0&byline=0&portrait=0"
              allow="fullscreen"
              allowFullScreen
            />
          </div>
        </div>
        <script src="https://player.vimeo.com/api/player.js" />
        <div className="two-col-grid">
          <div>
            <h3>How we work</h3>
            <p>
              We build apps, software, and websites with non-profits, local
              government, and the community that serve their needs. Who we work
              with and what we work on are determined at project pitch nights.
              To stay on top of projects throughout the year, we host weekly
              project nights for all members, and a special onboarding new
              members night once a month.
            </p>
          </div>
          <div>
            <h3>Culture</h3>
            <p>
              Code for Denver is an intentionally inclusive community of problem
              solvers. We are primarily a working group, participating on
              projects or organizational needs each meetup. We are beginners and
              experts, designers and developers, and everything in between,
              connected by wanting to give back to our community, influence
              civic technology, and gather in a safe space to code, design,
              learn, and build.
            </p>
          </div>
          <div>
            <h3>Join us</h3>
            <p>We meet on most Monday nights. Join us, everyone is welcome!</p>
            <p>
              RSVP on <a href={ExternalURL.MEETUP}>Meetup</a> to see the full
              schedule of events and to let us know you're coming.
            </p>
            <p>
              Galvanize Denver &ndash; Platte
              <br />
              1644 Platte St
              <br />
              Denver, CO 80202
              <br />
              6pm-9pm
              <br />
            </p>
            <span className="social-links">
              <a href={ExternalURL.MEETUP}>
                <FontAwesomeIcon icon={faMeetup} />
              </a>
              <a href={ExternalURL.GITHUB}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={ExternalURL.FACEBOOK}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </span>
          </div>
          <div>
            <div className="iframe-parent">
              <div className="iframe-container">
                <iframe
                  title="Code for Denver meeting location"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Galvanize+-+Denver+(Platte)`}
                  allow="fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <h2 id="FAQ">Frequently Asked Questions</h2>
        <p className="secondary-text">How do you find projects?</p>
        <p>
          We source projects in a few ways. Most of our projects come our
          members having a connection to a partner that needs our help, but we
          also take project inquiries through email, find good projects in the
          Code for America network, and partners showing up to our project
          night.
        </p>
        <p className="secondary-text">What kind of projects do you work on?</p>
        <p>
          We focus on projects that help the community in some tangible way. We
          work “with” not “for” our partners and hope to find things that are
          universal and can be shared through the Code for America brigade
          network.
        </p>
        <p className="secondary-text">
          Can I get involved even if I’m not a programmer or interested in
          programming?
        </p>
        <p>
          Definitely. We do a lot of coding, but need problem solvers from all
          professions and viewpoints to make truly inclusive, community focused
          solutions. We have volunteers with backgrounds in design, marketing,
          sales, organizing, nonprofits, and project management. All of it is
          valued and useful for our mission.
        </p>
        <p className="secondary-text">
          Can I get involved if I’m a beginner programmer or still in school?
        </p>
        <p>
          Yes! We pride ourselves on being an inclusive community that will help
          people apply the skills they are learning. Our members have a wide
          range of experience levels and we love to welcome in new coders.
        </p>
        <p className="secondary-text">Where can I learn to program?</p>
        <p>
          There are a bunch of resources to chose from, including online free
          and paid courses and schools or programs in the Denver area. We like
          to recommend some of the learn-to-code meetups in Denver too,
          especially the ones hosted by the Denver Public Library.
        </p>
        <p className="secondary-text">
          How are you connected to Code for America?
        </p>
        <p>
          We are a local chapter of Code for America, so we work closely with
          them. But we are independent in the projects we work on, with a focus
          on our local community.
        </p>
      </div>
    </>
  );
}
