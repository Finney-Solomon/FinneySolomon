
import { IconButton } from '@mui/material';
import { Button, Card, CardHeader, Input, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';
import './style.css';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const ContactMe = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can implement the logic to send the message
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
    };

    return (
        <div className='certification-container'>
            <h2 className="skills-heading" >Contact Me</h2>
            <p className="skills-p" >I am always looking for opportunities to grow and learn. If you have any questions or comments,<br /> Feel free to reach out to me anytime..</p>
            <br/>
            <div p={6} className='contact-me-card'>
                {/* <form onSubmit={handleSubmit} className="form-container">
                    <div className="name-inputs">
                        <Input
                            type="text"
                            value={firstName}
                            label="First Name"
                            onChange={handleFirstNameChange}
                            required
                        />
                        <Input
                            type="text"
                            value={lastName}
                            label="Last Name"
                            onChange={handleLastNameChange}
                            required
                        />
                    </div>
                    <Input
                        type="email"
                        value={email}
                        label="Email"
                        onChange={handleEmailChange}
                        required
                    />
                    <Input
                        type="tel"
                        value={phone}
                        label="Phone"
                        onChange={handlePhoneChange}
                    />
                    <Textarea
                        value={message}
                        label="Message"
                        onChange={handleMessageChange}
                        required
                    />
                    <Button type="submit" colorScheme="teal"  color="primary">
                        Submit
                    </Button>
                </form> */}

                <div className='social-media-links pad\'>
                <br/>
                
                <IconButton
                    color="primary"
                   href={"https://www.linkedin.com/in/finney-solomon/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                >
                  <LinkedInIcon/>
                </IconButton>
                <IconButton
                    color="primary"
                     href={"https://github.com/Finney-Solomon"}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                >
                 <GitHubIcon/>
                </IconButton>
                <IconButton
                    color="primary"
                    href={"https://www.instagram.com/__________solo__________/?igshid=MjEwN2IyYWYwYw%3D%3D"}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                >
                  <InstagramIcon/>
                </IconButton>
                <IconButton
                    color="primary"
                    href={"https://www.facebook.com/solofinney"}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                >
                  <FacebookIcon/>
                </IconButton>
                <br />
                <br/>
            </div>
            </div>
        </div>
    );
};