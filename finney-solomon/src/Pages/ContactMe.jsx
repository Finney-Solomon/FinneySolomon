import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Call, Mail } from "@mui/icons-material";

export const ContactMe = () => {
  return (
    <div>
      <h2 className="heading">Contact Me</h2>
      <p className="heading-details">
        I am always looking for opportunities to grow and learn. If you have any
        questions or comments, Feel free to reach out to me anytime...
      </p>
      <br />
      {/* <div className=" contact-div flex-col gap-8 sm:flex-row justify-center ">
        <Code
          color="default"
          size="lg"
          onClick={() =>
            window.open(
              `https://mail.google.com/mail/?view=cm&fs=1&to=finney.solomon.1@gmail.com`
            )
          }
          className="contact-Code animate-drip-expand  "
        >
          Email: finney.solomon.1@gmail.com
        </Code>
        <Code
          color="default"
          size="lg"
          onClick={() => navigator.clipboard.writeText("9059875310")}
          className="contact-Code animate-drip-expand  "
        >
          Phone: (+91) 90598-75310
        </Code>

        <Code
          color="default"
          size="lg"
          className="contact-Code  animate-drip-expand my-4"
        >
          Address: Andhra Pradesh, India
        </Code>
      </div> */}
      <div className="contact-me-card">
        <div>
          <br />
          <IconButton
              color="primary"
              href="tel:+9059875310"
              target="_blank"
              rel="noopener noreferrer"
              size="x-large"
            >
              <Call />
            </IconButton>
            <IconButton
              color="primary"
              href="mailto:finneysolomon@yahoo.com"  // Replace example@example.com with your actual email address
              target="_blank"
              rel="noopener noreferrer"
              size="large"
            >
              <Mail />
            </IconButton>
          <IconButton
            color="primary"
            href={"https://www.linkedin.com/in/finney-solomon/"}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            href={"https://github.com/Finney-Solomon"}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            href={
              "https://www.instagram.com/__________solo__________/?igshid=MjEwN2IyYWYwYw%3D%3D"
            }
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="primary"
            href={"https://www.facebook.com/solofinney"}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <FacebookIcon />
          </IconButton>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
