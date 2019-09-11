import React from "react";
import {
  Header,
  Segment,
  Form,
  Label,
  Responsive,
  Grid,
  GridColumn,
} from "semantic-ui-react";
import { BannerContent } from "./BannerContent";
export function Banner() {
  const [email, setEmail] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);

  const handleSubmit = () => {
    console.log("Submitting form");
    console.log("Email is : " + email);
    setSuccess(true);
  };

  return (
    <>
      <Segment inverted vertical style={{ padding: "0em" }}>
        <>
          <Responsive minWidth={1024}>
            <BannerContent columnWidth={8} />
          </Responsive>

          <Responsive maxWidth={1023}>
            <BannerContent columnWidth={16} />
          </Responsive>
        </>
      </Segment>

      <Segment textAlign="center" style={{ padding: "2em" }}>
        <Header
          as='h4'
          content='Want to stay up to date on civic tech in Colorado?  Join our newsletter!'
        />
        <Grid stackable centered>
          <Grid.Row>
            {!success ? (
              <Form style={{paddingTop: '1em'}}fluid onSubmit={handleSubmit}>
                  <Form.Input
                    placeholder='Email'
                    name='email'
                    onChange={(e, { value }) => setEmail(value)}
                  />
                  <Form.Button
                    fluid
                    disabled={!email}
                    color='red'
                    content='Submit'
                  />
              </Form>
            ) : (
              <Label color='red' size='big'>
                You are now on the list! 👍
              </Label>
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
