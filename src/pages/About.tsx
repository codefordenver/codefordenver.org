import React from 'react';
import { Sponsors } from '../components/Sponsors';
import { AboutBanner } from '../components/AboutBanner';
import { AboutOrg } from '../components/AboutOrg';
import { Contact } from '../components/Contact';
import '../page-styles/About.scss';

export function About() {
  return (
    <>
      <AboutBanner />
      <AboutOrg />
      <Sponsors show={false} />
      <Contact />
    </>
  );
}
