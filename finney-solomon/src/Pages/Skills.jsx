import { Card, CardBody, CardFooter, Image, Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import './style.css'; // Make sure you have the appropriate CSS file imported
import mySkill from '../Json/skillsList';

export const Skills = () => {
    return (
        <div className="skills-container">
            <h2 className="skills-heading" >Skills</h2>
            <p  className="skills-p" >"Committed to growth, I eagerly embrace new challenges. I'll learn and return prepared"</p>
            <br />
            <div className="skills-tab-container">
                <Tabs aria-label="Dynamic tabs" items={mySkill} color={"primary"} >
                    {(item) => (
                        <Tab key={item.id} title={item.label}  >
                            <Card className="skills-card">
                                <CardBody>
                                    <div className="skills-grid">
                                        {item.list.map((skill, index) => (
                                            <div key={index} className="skill-card-container">
                                                <Card shadow="sm" border="5" key={index} isPressable className="skill-card">                                                  
                                                        <Image
                                                            alt={skill.photo}
                                                            className="skill-image"
                                                            src={skill.photo}      
                                                            fallbackSrc={skill.photo}   
                                                            srcSet={skill.photo}                            
                                                        /> 
                                                        <h4 className="cardFooter">{skill.label}</h4>
                                                        
                                                        
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
};
