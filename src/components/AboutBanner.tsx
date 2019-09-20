import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

export function AboutBanner() {
  return (
    <Grid
      verticalAlign="middle"
      columns={1}
      style={{ margin: '0', border: 'none' }}
      className="bg-white"
    >
      <Grid.Row>
        <Grid.Column style={{ padding: '0' }}>
          <Header style={{ margin: '0 2rem' }} as="h2">
            About
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        centered
        only="tablet computer"
        style={{
          height: '55vh',
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/about-banner.jpeg")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Grid.Column
          style={{
            opacity: '0.9',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            width: '75vw'
          }}
        >
          <Header
            as="h2"
            style={{ fontSize: '2.7rem' }}
            textAlign="center"
            color="red"
          >
            An intentionally inclusive community of problem solvers
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile" style={{ backgroundColor: 'black' }}>
        <Grid.Column style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <Header as="h1" size="large" color="red" textAlign="center">
            An intentionally inclusive community of problem solvers
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
