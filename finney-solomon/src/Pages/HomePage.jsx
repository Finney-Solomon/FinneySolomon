import React, { useEffect, useState } from 'react'
import './style.css';
import Typewriter from "typewriter-effect";
import { Button } from '@nextui-org/react';

export const HomePage = () => {
 const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 14000);
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
              .typeString("<br/>I'm a Full Stack Developer...")
              .start();
            
          }}
        /></h1>
        {open ? <div c className={`button-container ${open ? 'fade-in flex gap-4 items-center' : ''}`}>
          <Button color="primary">About me</Button>
          <Button>Connect</Button>
        </div> : null}
      </div>
    </div>
  )
}
