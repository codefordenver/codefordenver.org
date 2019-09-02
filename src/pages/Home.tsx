import React from "react";
import { Banner } from "../components/Banner";
import { Featured } from "../components/Featured"
import { Sponsors } from "../components/Sponsors";
export function Home() {
  return (
    <>
      <Banner/>
      <Featured />
      <Sponsors />
    </>
  );
}
