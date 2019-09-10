import React from "react";
import { Sponsors } from "../components/Sponsors";
import { AboutBanner } from "../components/AboutBanner";
import { AboutOrg } from "../components/AboutOrg";

export function About() {
  return (
    <>
      <AboutBanner />
      <AboutOrg />
      
      <Sponsors />
    </>
  );
}
