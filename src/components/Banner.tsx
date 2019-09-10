import React from "react";
import { Grid, Image, Header, Segment, Input, Label } from "semantic-ui-react";

export function Banner() {
  const [email, setEmail] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);
  return (
    <>
      <Segment inverted vertical style={{ padding: "0em" }}>
        <Grid columns='equal' stackable doubling>
          <Grid.Row style={{ padding: "0em" }}>
            <Grid.Column width={8}>
              <Image
                fluid
                src={process.env.PUBLIC_URL + "/images/denver-banner.jpg"}
              />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' className='columnTextRight'>
              <p>
                Code for Denver is building the next great generation of civic
                hackers, innovators, and disruptors here in Colorado.
              </p>
              <p>
                We are a Code for America Brigade community with regular meetups
                and other events to help bring together creative problem solvers
                with local community groups and government trying to address
                some of our most pressing 21st century problems
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment textAlign="center">
        <Header
          textAlign='center'
          as='h4'
          content='Want to stay up to date on civic tech in Colorado?  Join our newsletter!'
        />
        {!success ? (
          <Input
            action={{
              color: "red",
              content: "Copy",
              onClick: () => {
                console.log(email);
                setSuccess(true);
              },
            }}
            type='email'
            placeholder='Enter email'
            onChange={(e, { value }) => setEmail(value)}
          />
        ) : (
          <Label color="red" size="big">You are now on the list!  👍</Label>
        )}
      </Segment>
    </>
  );
}
