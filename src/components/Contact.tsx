import React, { CSSProperties, useState } from "react";
import { Button, Form, Grid, Header, Message, Segment, TextArea } from "semantic-ui-react";
import axios, { AxiosRequestConfig } from "axios";

interface IEmail {
    to: string;
    subject: string;
    email: string;
    message: string;
}

async function sendEmail({ to, email, subject, message}: IEmail) {
    const { REACT_APP_MAILER_ENDPOINT } = process.env;
    const opts: AxiosRequestConfig = {
        data: {
            to,
            from: email,
            subject: `Contact Form | ${subject} `,
            body: message,
        },
    }
    const res = await axios.post(`${REACT_APP_MAILER_ENDPOINT}`, opts)
    console.log(res)
}

export function Contact() {
    const to = "david@codefordenver.org"
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<any>("")
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const borderRadius__css: CSSProperties = { borderRadius: 18 }
    const label__css: CSSProperties = { textAlign: "left" }

    const resetForm = () => {
        setName("")
        setEmail("")
        setMessage("")
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const opts: IEmail = { to, email, subject: name, message }

        e.preventDefault()

        try {
            const res = await sendEmail(opts)
            console.log({ res })

        } catch (err) {
            console.log({ err })
        } finally {
            resetForm()
        }
    }


    return (
        <Segment inverted
                 vertical
                 style={{ padding: "2em", backgroundColor: "#E14E54" }}>
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
                    <Message
                        success
                        hidden={!success}
                        compact
                        header="Thanks for reaching out! We'll be in touch soon :)"
                    />
                    <Message
                        error
                        hidden={!error}
                        compact
                        header="Oh no! Looks like something went wrong."
                        content="Sorry for the inconvenience. Please get in touch with hello@codefordenver.org directly."
                    />
                </Grid.Row>
                <Grid.Row>
                    <Form loading={false}
                          onSubmit={async (e) => handleFormSubmit(e)}>
                        <Form.Field>
                            <label className="white" style={label__css}>Name*</label>
                            <input
                                style={borderRadius__css}
                                placeholder='Name'
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label className="white" style={label__css}>Email*</label>
                            <input
                                style={borderRadius__css}
                                placeholder='Email'
                                value={email}
                                type='email'
                                required
                                onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label className="white" style={label__css}>Message*</label>
                            <TextArea
                                style={borderRadius__css}
                                maxLength={280}
                                rows={5}
                                value={message}
                                cols={33}
                                required
                                placeholder='Less than 280 characters please.'
                                onChange={(e, { value }) => setMessage(value)}/>
                        </Form.Field>
                        <Button
                            fluid
                            style={{ ...borderRadius__css, marginTop: "3em" }}
                            inverted
                            size={"large"}
                            disabled={![name, email, message].every(e => e)}
                            type='submit'>
                            Send us a message
                        </Button>
                    </Form>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
