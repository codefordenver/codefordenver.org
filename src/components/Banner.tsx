import React from "react";
import { Header, Segment, Form, Label, Responsive } from "semantic-ui-react";
import { BannerContent } from "./BannerContent";
export function Banner() {
  const [email, setEmail] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);
  const handleSubmit = () => {
    console.log("Submitting form");
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

      <Segment textAlign="center">
        <Header
          as='h4'
          content='Want to stay up to date on civic tech in Colorado?  Join our newsletter!'
        />
        {!success ? (
          <Form className="formTest" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder='Email'
                name='email'
                onChange={(e, { value }) => setEmail(value)}
              />
              <Form.Button content='Submit' />
            </Form.Group>
          </Form>
        ) : (
          <Label color='red' size='big'>
            You are now on the list! 👍
          </Label>
        )}
      </Segment>
    </>
  );
}
