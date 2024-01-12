import React, { useState } from "react";
import "./style.css";
import { Card, CardBody, Image } from "@nextui-org/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export const Certifications = () => {
  const certificates = [
    {
      title: "Meta Front-End Developer Professional Certificate",
      imageUrl:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FVSDN2NDU8KY/CERTIFICATE_LANDING_PAGE~FVSDN2NDU8KY.jpeg",
      link: "https://coursera.org/share/c63b46afca5191348bec73811fde8906",
    },
    {
      title: "Software Engineer Intern Certificate",
      imageUrl: require("../images/softwareEngineerInternCertificate.jpg"),

      link: "https://www.hackerrank.com/certificates/a2a9d84501ff",
    },
    {
      title: "React (Basic) Certificate",
      imageUrl: require("../images/react(Basic)Certificate.jpg"),

      link: "https://www.hackerrank.com/certificates/27673d931443",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = (increment) => {
    // Increment the current index, and loop back to the beginning if at the end
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + increment + certificates.length) % certificates.length
    );
  };

  return (
    <div className="certification-container">
      <br />
      <h2 className="heading">Certification</h2>
      <p className="heading-details">{certificates[currentImageIndex].title}</p>
      <br />
      <Card className="certification-card" style={{width:'65vw',height:'70vh'}}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            classNames="certificate.image"
            onClick={() => window.open(certificates[currentImageIndex].link)}
            src={certificates[currentImageIndex].imageUrl}
            style={{width:'60vw',height:'60vh'}}
          />
        </CardBody>
      </Card>
      <div className="navigation-arrows">
        <span onClick={() => handleNextClick(-1)}>
          <ArrowBackIosIcon /> Back{" "}
        </span>
        
        <span onClick={() => handleNextClick(1)}>
          
          Next <ArrowForwardIosIcon />
        </span>
      </div>
    </div>
  );
};
