import React, { useState } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import useAxios from "axios-hooks";

export function Contact() {
    const to = "hello@codefordenver.org"
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [
        { data: putData, loading: putLoading, error: putError },
        executePut
    ] = useAxios({
        url: `${process.env.REACT_APP_MAILER_ENDPOINT}`,
        method: "POST",
        data: {
            to,
            from: email,
            subject: `Contact Form | ${name} `,
            body: 'message'
        },
    }, { manual: true })


    return (
        <Segment inverted vertical style={{ padding: "2em", backgroundColor: "#E14E54" }}>
            <Header as='h2' content='CONTACT US' style={{ marginBottom: "2em" }}/>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Form loading={putLoading}>
                        <Form.Field>
                            <label className="white">Name</label>
                            <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label className="white">Email</label>
                            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Field>
                        <Button inverted type='submit' onClick={() => executePut() }>Send us a message</Button>
                    </Form>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
