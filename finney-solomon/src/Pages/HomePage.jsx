import React, { useEffect, useState } from 'react'
import './style.css';
import Typewriter from "typewriter-effect";
import { IconButton } from '@mui/material';
import { Facebook, GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
export const HomePage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 12000);
  }, [open]);

  return (
    <div className="wallpaper-container">
      <div className="homepage">
        <h1><Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Bonjour")
              .pauseFor(1000)
              .typeString("<br/> This is Finney Solomon")
              .pauseFor(1000)
              .typeString("<br/>A Full Stack Developer...")
              .start();

          }}
        /></h1>
        <div className="contact-me-card">

        </div>
        {open ? <div c className={`button-container ${open ? 'fade-in flex gap-2 items-center' : ''}`}>
          <div>
            <IconButton
              color="primary"
              href="tel:+9059875310"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
            >
              <CallIcon />
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
              <LinkedIn />
            </IconButton>
            <IconButton
              color="primary"
              href={"https://github.com/Finney-Solomon"}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
            >
              <GitHub />
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
              <Instagram />
            </IconButton>
            <IconButton
              color="primary"
              href={"https://www.facebook.com/solofinney"}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
            >
              <Facebook />
            </IconButton>
            <br />
            <br />
          </div>
        </div> : null}
      </div>
    </div>
  )
}
