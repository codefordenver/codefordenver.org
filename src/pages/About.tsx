import React from 'react';
import { Sponsors } from '../components/Sponsors';
import { AboutBanner } from '../components/AboutBanner';
import { AboutOrg } from '../components/AboutOrg';
import { Contact } from '../components/Contact';

export function About() {
  const show: boolean = false;

  return (
    <>
      <AboutBanner />
      <AboutOrg />
      <Sponsors show={show} />
      <Contact />
    </>
  );
}
