import React from "react";
import { Sponsors } from "../components/Sponsors";
import { AboutBanner } from "../components/AboutBanner";
import { AboutOrg } from "../components/AboutOrg";
import { AboutSponsor } from "../components/AboutSponsor";


export function About() {
  return (
    <>
      <AboutBanner />
      <AboutOrg />
      <AboutSponsor />
      <Sponsors />
    </>
  );
}
