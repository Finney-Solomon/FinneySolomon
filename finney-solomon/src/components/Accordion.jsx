import React from 'react'
import mySkill from '../Json/skillsList'
import { Accordion, AccordionItem, Image } from '@nextui-org/react'

export const AccordionComponent = () => {
  return (
    <Accordion variant="splitted">
      {mySkill.map((item) => (
        <AccordionItem key={item.id} title={item.label} subtitle={
            <span>
              Skills in {item.label}  <strong>{item.list.length}</strong>
            </span>
          }>
         
                  <div className="skills-grid">
                    {item.list.map((skill, index) => (
                      <div key={index} className="skill-card-container">
                        
                          <Image
                          key={index}
                            alt={skill.photo}
                            className="skill-image"
                            src={skill.photo}
                            fallbackSrc={skill.photo}
                            srcSet={skill.photo}
                          />
                          <h4 className="cardFooter">{skill.label}</h4>
                        
                      </div>
                    ))}
                  </div>
               
        </AccordionItem>
      ))}
    </Accordion>
  )
}
