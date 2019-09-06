import React, { CSSProperties, useState } from "react";
import { Button, Form, Grid, Header, Segment, TextArea } from "semantic-ui-react";
import useAxios from "axios-hooks";

export function Contact() {
    const to = "hello@codefordenver.org"
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<any>("")
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
            body: message,
        },
    }, { manual: true })

    const borderRadius__css: CSSProperties = { borderRadius: 18 }
    const label__css: CSSProperties = { textAlign: "left" }

    return (
        <Segment inverted vertical style={{ padding: "2em", backgroundColor: "#E14E54" }}>
            <Header as='h1'
                    content='CONTACT US'
                    style={{ fontWeight: "bold", marginBottom: "1em", textAlign: "center" }}/>
            <Grid
                divided
                inverted
                stackable
                className="segment centered"
                style={{ backgroundColor: "#E14E54" }}>
                <Grid.Row>
                    <Form loading={putLoading}>
                        <Form.Field>
                            <label className="white" style={label__css}>Name*</label>
                            <input
                                style={borderRadius__css}
                                placeholder='Name'
                                onChange={(e) => setName(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label className="white" style={label__css}>Email*</label>
                            <input
                                style={borderRadius__css}
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label className="white" style={label__css}>Message*</label>
                            <TextArea
                                style={borderRadius__css}
                                maxLength={280}
                                rows={5}
                                cols={33}
                                placeholder='Less than 280 characters please.'
                                onChange={(e, { value }) => setMessage(value)}/>
                        </Form.Field>
                        <Button
                            fluid
                            style={{...borderRadius__css, marginTop: "3em"}}
                            inverted
                            size={"large"}
                            type='submit'
                            onClick={() => executePut() }>
                            Send us a message
                        </Button>
                    </Form>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
