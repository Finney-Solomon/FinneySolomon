import React from "react";
import "./style.css";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
export const Certifications = () => {
  return (
    <div className="certification-container">
      <br />
      <h2 className="heading">Certification</h2>
      <p className="heading-details">
        "Meta Front-End Developer Professional Certificate"
      </p>
      <br />
      <Card className="certification-card">
        <CardBody className="overflow-visible p-0 ">
          <Image
            shadow="sm"
            radius="lg"
            classNames="certificate.image"
            onClick={() =>
              window.open(
                "https://coursera.org/share/c63b46afca5191348bec73811fde8906"
              )
            }
            src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FVSDN2NDU8KY/CERTIFICATE_LANDING_PAGE~FVSDN2NDU8KY.jpeg"
          />
        </CardBody>
      </Card>
    </div>
  );
};
