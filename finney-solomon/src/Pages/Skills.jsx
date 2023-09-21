
import React, { useEffect, useState } from "react";
import "./style.css"; // Make sure you have the appropriate CSS file imported
import mySkill from "../Json/skillsList";
import { AccordionComponent } from "../components/Accordion";
import { Tabs, TabsComponent } from "../components/Tabs";

export const Skills = () => {

    const [isMobileView, setMobileView] = useState(window.innerWidth <= 640 ? true : false);
console.log(isMobileView,"isMobileView")
    useEffect(() => {
        // Function to update isMobileView state based on window innerWidth
        const updateMobileView = () => {
            setMobileView(window.innerWidth <= 640);
        };

        // Add event listener to update isMobileView on window resize
        window.addEventListener('resize', updateMobileView);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateMobileView);
        };
    }, []);
    return (
        <div className="skills-container">
            <h2 className="heading">Skills</h2>
            <p className="heading-details">
                "Committed to growth, I eagerly embrace new challenges. I'll learn and
                return prepared"
            </p>
            <br />
            <div className="skills-tab-container">

                 {isMobileView?<AccordionComponent />:<TabsComponent />}
               
            </div>
        </div>
    );
};
