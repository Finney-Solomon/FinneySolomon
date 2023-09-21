import React from 'react'
import mySkill from '../Json/skillsList'
import { Card, CardBody, Image, Tab, Tabs } from '@nextui-org/react'

export const TabsComponent = () => {
  return (
     <Tabs aria-label="Dynamic tabs" items={mySkill} color={"primary"}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card className="skills-card">
                <CardBody>
                  <div className="skills-grid">
                    {item.list.map((skill, index) => (
                      <div key={index} className="skill-card-container">
                        <Card
                          shadow="sm"
                          border="5"
                          key={index}
                          isPressable
                          className="skill-card"
                        >
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
  )
}
