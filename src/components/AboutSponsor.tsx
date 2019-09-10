import React from "react";
import { Header, Segment, Container } from "semantic-ui-react";

export function AboutSponsor() {

  return (
    <Segment style={{ margin: "0" }} textAlign='left'>
      <Container text >
        <Header>Our Sponsors</Header>
        <p>
          We couldn’t do any of this work without our sponsors.
          If you’d like to learn more about how to support Code
          for Denver, reach out.
        </p>
      </Container>
    </Segment>
  )
}

