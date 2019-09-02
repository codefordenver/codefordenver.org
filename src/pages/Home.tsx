import React from "react";
import { Banner } from "../components/Banner";
import { Featured } from "../components/Featured"
import { Sponsors } from "../components/Sponsors";
import { Volunteer } from "../components/Volunteer";

export function Home() {
  return (
    <>
      <Banner/>
      <Volunteer />
      <Featured />
      <Sponsors />
    </>
  );
}
