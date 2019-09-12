import React from "react"; 
import {Header, Grid } from "semantic-ui-react";

export function AboutBanner() {
  
  return(
    <Grid 
      verticalAlign='middle'
      centered
      columns={1}
      style={{ margin: "0", border: "none" }}>
      <Grid.Row 
        only='tablet computer'
        style={{ 
        height: "60vh",
        backgroundImage: `url("${process.env.PUBLIC_URL}/images/about-banner.jpeg")`,
        backgroundPosition: 'center'
        }}>
        <Grid.Column 
        style={{ 
          opacity: "0.9", 
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          width: "70vw"
          }}>
            <Header as="h1" size="huge" style={{fontSize:"4rem"}} color="red">
              An intentionally inclusive community of problem solvers
            </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='mobile' style={{backgroundColor:"black"}}>
        <Grid.Column
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
          <Header as="h1" size="large" color="red">
            An intentionally inclusive community of problem solvers
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid> 
  ) 
}

