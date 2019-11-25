import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import get from 'lodash.get';
import '../component-styles/Contact.scss';

interface IEmail {
  to: string;
  subject: string;
  email: string;
  body: string;
}

async function sendEmail({ to, email, subject, body }: IEmail) {
  const { REACT_APP_MAILER_ENDPOINT } = process.env;
  const data = {
    to,
    from: email,
    subject: `Contact Form | ${subject} `,
    body
  };
  return await axios.post(`${REACT_APP_MAILER_ENDPOINT}`, data);
}

export function Contact() {
  const to = 'hello@codefordenver.org';
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<any>('');
  const [error, setError] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const resetMessages = () => {
    setSuccess(false);
    setInvalid(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const opts: IEmail = { to, email, subject: name, body: message };
    e.preventDefault();
    resetMessages();
    try {
      const res = await sendEmail(opts);
      if (get(res, 'status') === 200) {
        setSuccess(true);
        resetForm();
      }
    } catch (err) {
      if (get(err, 'response.data') === 'Error: invalid from email') {
        setInvalid(true);
        return;
      }
      setError(true);
    }
  };

  return (
    <div id="contact" className="page secondary">
      <h1>CONTACT US</h1>
      <div hidden={!success}>
        Thanks for reaching out! We'll be in touch soon :)
      </div>
      <div hidden={!error}>
        <h3>Oh no! Looks like something went wrong.</h3>
        <span>
          Sorry for the inconvenience. Please get in touch with
          hello@codefordenver.org directly.
        </span>
      </div>
      <div hidden={!invalid}>
        <h3>Oh no! Looks like an invalid email was provided.</h3>
        <span>Please check email and try again.</span>
      </div>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <label>Name*</label>
        <input
          placeholder="Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label>Email*</label>
        <input
          placeholder="Email"
          value={email}
          type="email"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <label>Message*</label>
        <textarea
          maxLength={280}
          rows={5}
          value={message}
          cols={33}
          required
          placeholder="Less than 280 characters please."
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        />
        <button disabled={![name, email, message].every(e => e)} type="submit">
          Send us a message
        </button>
      </form>
    </div>
  );
}
