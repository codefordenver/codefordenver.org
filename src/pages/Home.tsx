import React from "react";
import { Banner } from "../components/Banner";
import { Featured } from "../components/Featured";
import { Sponsors } from "../components/Sponsors";
import { Volunteer } from "../components/Volunteer";
import { SidebarExampleSidebar } from "../components/NavSidebar";

export function Home() {
  return (
    <SidebarExampleSidebar>
      <Banner />
      <Volunteer />
      <Featured />
      <Sponsors />
    </SidebarExampleSidebar>
  );
}
