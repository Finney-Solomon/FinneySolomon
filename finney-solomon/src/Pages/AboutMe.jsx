import React, { useEffect } from 'react'
import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
export const AboutMe = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <div >
            <div
                id="about"
                className="min-h-screen flex flex-col text-center gap-5  text-lg font-normal"
            >
                <div className="head  font-bold" data-aos={"zoom-in"}  data-aos-duration="3000">
                 <h1> About Me</h1>   
                </div>
                <div className="flex flex-row  gap-6 ml-8">
                    <div className="details flex-col mt-14 flex flex-auto w-64 gap-6">
                        <h3 className="text-3xl font-medium" data-aos={"fade-left"}  data-aos-duration="3000" data-aos-easing="linear">
                            I'm <span className="text-red">Finney Solomon,</span> a Full Stack Developer
                        </h3>
                        <p
                            className="pt-5 leading-7 text-slate-900 text-justify"
                            data-aos={"fade-left"}  data-aos-duration="3000"
                        >
                            In my professional career, I've worked on various projects, leveraging a wide range of
                            technologies, including React, Redux, JavaScript, Figma and etc... and I love exploring new technologies
                        </p>
                        <p
                            className="text-justify leading-7 text-slate-900"
                            data-aos={"fade-right"} data-aos-duration="3000"
                        >
                            When I'm not coding, you can find me playing the keyboard or guitar.
                            Music has been an integral part of my life, and I find it relaxing and inspiring.
                            I also love spending quality time with my pets, Finn & Jimmy, who always bring joy and companionship to my life.
                            In addition to these interests, I'm passionate about traveling and photography.
                            Exploring new places and capturing the beauty of the world through my camera lens is both fulfilling and enriching.
                        </p>
                        <p className="text-justify leading-7 text-slate-900"
                            data-aos={"fade-left"} data-aos-duration="3000" >
                            Technology has always been an ever-evolving field, and I'm excited to see what the future holds. I'm
                            open to collaborations, new opportunities, and contributing to meaningful projects.</p>
                        <p className="text-justify leading-7 text-slate-900"
                            data-aos={"fade-right"}  data-aos-duration="3000" >
                            Let's connect and explore the possibilities together!
                        </p>
                    </div>
                    <div
                        class="relative flex-auto w-32   sm:rounded-lg  pl-4"
                        data-aos={"slide-left"}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}
