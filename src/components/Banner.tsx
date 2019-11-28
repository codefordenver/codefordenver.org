import React from 'react';

export function Banner() {
  return (
    <>
      <div className="split-image">
        <img
          alt="Union Station Banner"
          id="banner-image"
          className="desktop-only"
          src={process.env.PUBLIC_URL + '/images/denver-banner.jpg'}
        />
        <div className="inverted">
          <div className="text">
            <h2>Who we are</h2>
            <p>
              Code for Denver is building the next great generation of civic
              hackers, innovators, and disruptors here in Colorado.
            </p>
            <p>
              We are a Code for America Brigade community with regular meetups
              and other events to help bring together creative problem solvers
              with local community groups and government trying to address some
              of our most pressing 21st century problems
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
