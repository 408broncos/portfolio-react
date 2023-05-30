import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [formMessage, setFormMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'Email') {
            const valid = validateEmail(e.target.value);
            if (!valid) {
                setFormMessage('Email is invalid.');
            } else {
                setFormMessage('');
            }
        } else {
            if (!e.target.value.length) {
                const name = e.target.name;
                setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
            } else {
                setFormMessage('');
            }
        }

        if (!formMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_7pi3req', '#contactForm', 'user_2ClFT2CBVbPN3tPCiXsd0')
            .then(function (response) {
                console.log(response.text);
                setFormMessage("Message sent!");
            }, function (error) {
                console.log(error.text);
                setFormMessage("There was an error sending your message, please email Jordan at jordanbc408@@gmail.com for further information");
            });
    }

    return (
        <Form onSubmit={sendEmail} id="contactForm">
            <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control required name="name" placeholder="Jordan Cardenas" onBlur={handleChange} />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control required name="email" type="email" placeholder="jcar@gmail.com" onBlur={handleChange} />
            </Form.Group>

            <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control required name="subject" placeholder="Topic" onBlur={handleChange} />
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control required name="message" as="textarea" rows="6" placeholder="Message" onBlur={handleChange} />
            </Form.Group>

            {formMessage && <p className="form-message">{formMessage}</p>}

            <Button type="submit" className='btn'>Send</Button>
        </Form>
    )
}

export default ContactForm;