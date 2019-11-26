import React from 'react';

export function Volunteer() {
  return (
    <>
      <div className="split-image secondary">
        <div id="us">
          <div className="text">
            <h2>What we do</h2>
            <p>
              We build apps, software, and websites for non-profits, local
              government, and the community that serve their needs. Who we work
              with and what we work on are determined on project pitch nights.
              To stay on top of projects throughout the year, we host weekly
              project nights for all members, and a special onboarding new
              members night once a month.
            </p>
          </div>
        </div>
        <img
          alt="Coffee at the Point"
          className="desktop-only"
          src={process.env.PUBLIC_URL + '/images/CFD-CoffeeOnThePoint.jpg'}
        />
      </div>
    </>
  );
}
