import React from "react";
import { Card, CardBody, Image, Button, Code } from "@nextui-org/react";
import Todo from "../images/Todo.gif";

export const Projects = () => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div
      style={{
        width: "70vw",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        marginTop: "10vh",
      }}
      className=" gap-2 grid grid-cols-12 grid-rows-2 px-8"
    >
      <h2 className="heading">Projects</h2>
      <p className="heading-details"></p>
      <br />
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[810px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4  flex flex-row">
            <div
              className="relative col-span-6 md:col-span-6"
              style={{ width: "38vw" }}
            >
              <Image
                alt="Album cover"
                className="object-contain"
                width="100%"
                height={100}
                shadow="md"
                src={Todo}
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-6 gap-6 md:gap-4" style={{
              width: "38vw", alignItems: "center", display: "flex",
              justifyContent: "flex-start", padding: "2em"
            }}>
              <h1 style={{ fontSize: "2em" }}>ToDo's</h1>
              <p style={{ fontSize: "1.2em" }}>
                Developed a robust full-stack application leveraging the MERN
                (MongoDB, Express.js, React.js, Node.js) stack. The project
                focuses on providing users with a seamless Todo list experience
                while ensuring secure authentication through a comprehensive
                login and registration system.
              </p>
              <div style={{ padding: "2em", display: "flex", width: "30vw" }}>
                <Code>React</Code>
                <Code>NextUI</Code>
                <Code>JavaScript</Code>
                <Code>MongoDB</Code>
                <Code>Express JS</Code>
              </div>
              <Button color="primary" style={{ display: "flex" }} onClick={() => window.open("https://github.com/Finney-Solomon/ToDo_App_MERN_Stack.git", "_blank")}>
                Git
              </Button>

            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
