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
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV85v_nxTxsBdjxJrMGNwTexZ2GL092hjhG2uDFoWB3TFLbpqwFJkYL9l3pAK_YA6_vob1O1cELXzS0mWqeTwLiGBd5738MT6r6O79MBqrrqc-pb26yU6g9DnLsOwi9cplQR0VokCX1jM0ZDbcWxtgqZ-60Trq5XAa8Jx-2mD9Xd8nkebTOm0CX3dbZLOY1nUVwhlilGGqA0rzE8TEHqmmsCGVdxPn-4xxXGgxOuI01d2kF0yH6IuibTqYQ_5iZvZspIY0E0k6c2hP5qbkYecoU326cfZy1-FYgJmTS9hByK04aI7BK5RvU7I-kct4f8SnDKLC3CaHS0iEr-sA3kcljFWsN2hqbRdm71Ot70ry0wHU14t3R1p0du7PacSlV2s9D0RYe0dzFiNKhdUito9DTzs2k43bFkJ_mbPIUlVH9KNeyn7L82s7_WQCQDiqt5EpUcgHDpRye16mH52M7YHx8DLgBpC0CkR2eCTFo9pt2viMVgiIPxizrKJTXrdo2JpIzTeAX5mJAWyBbt-g4ld7JcM4-Qq8WIAR9rTH5HJmxr4MbeXQHan-bsYH8HilnN-KSkXNFZructWKyMgD8Qz39-La876lF6sSyErOLIE9c65geMCbcF0nis8RXPZ8Svi4VNLMSDzMHTWHNSV2zLqlevc_eJXmtggrc6mkqQBaQ0ard3z5AwiQlSbpDmdNy3GZd2zUzqg8Nv_inQ8TN76RK5rSjOtV3_qGB02HoQf2_N7kGHccXbUYBb1iX47qSZm6_ecEY7lh55oqkgr41Nhx5Q2ohUXIDI7dwz6Wq12rDHKtSL8R3Lgs5vA_8gmIbczCTRQ4FZg_Oj-p8ir_Fp1nTowTgkYtexn5AbvZDp4R9BU5nZr2Ib2XrloJ_5dDkg1bn0=w1059-h802-s-no-gm?authuser=0https://lh3.googleusercontent.com/pw/ABLVV85v_nxTxsBdjxJrMGNwTexZ2GL092hjhG2uDFoWB3TFLbpqwFJkYL9l3pAK_YA6_vob1O1cELXzS0mWqeTwLiGBd5738MT6r6O79MBqrrqc-pb26yU6g9DnLsOwi9cplQR0VokCX1jM0ZDbcWxtgqZ-60Trq5XAa8Jx-2mD9Xd8nkebTOm0CX3dbZLOY1nUVwhlilGGqA0rzE8TEHqmmsCGVdxPn-4xxXGgxOuI01d2kF0yH6IuibTqYQ_5iZvZspIY0E0k6c2hP5qbkYecoU326cfZy1-FYgJmTS9hByK04aI7BK5RvU7I-kct4f8SnDKLC3CaHS0iEr-sA3kcljFWsN2hqbRdm71Ot70ry0wHU14t3R1p0du7PacSlV2s9D0RYe0dzFiNKhdUito9DTzs2k43bFkJ_mbPIUlVH9KNeyn7L82s7_WQCQDiqt5EpUcgHDpRye16mH52M7YHx8DLgBpC0CkR2eCTFo9pt2viMVgiIPxizrKJTXrdo2JpIzTeAX5mJAWyBbt-g4ld7JcM4-Qq8WIAR9rTH5HJmxr4MbeXQHan-bsYH8HilnN-KSkXNFZructWKyMgD8Qz39-La876lF6sSyErOLIE9c65geMCbcF0nis8RXPZ8Svi4VNLMSDzMHTWHNSV2zLqlevc_eJXmtggrc6mkqQBaQ0ard3z5AwiQlSbpDmdNy3GZd2zUzqg8Nv_inQ8TN76RK5rSjOtV3_qGB02HoQf2_N7kGHccXbUYBb1iX47qSZm6_ecEY7lh55oqkgr41Nhx5Q2ohUXIDI7dwz6Wq12rDHKtSL8R3Lgs5vA_8gmIbczCTRQ4FZg_Oj-p8ir_Fp1nTowTgkYtexn5AbvZDp4R9BU5nZr2Ib2XrloJ_5dDkg1bn0=s250-k-rw-no",

      link: "https://www.hackerrank.com/certificates/a2a9d84501ff",
    },
    {
      title: "React (Basic) Certificate",
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV8634DgdA0YUvpn2DK3Ak0BC-BFjl_ZlrTfLLhPixsbboS0-bn6Pkq4nUyTrhKhWVx4XKa2lp_xfEeDO6uspCnU3qvo9epy8bMqUmHsLm-hPRMMUBgh2xD57O_mnizMxe-QIf6LYdL-f6FsWvVTegs78qttk0fO7GE02jYprRyyrtTlzlH0H2S0NNSCcUWUqrfYDXPE0d3dz993TJ2je0JL_Y7G2XfTLYAfpVPWo7X5MoAIa3B-YHd8DKGitxAEKjQWy-ir97fyTi6qZOeyffaAT3ytN0PF0VOYPnLZPxrZxFPptc1r73S4TvOv-gX9zsFyf2SddlSp4dPXr3vKA9NVmLi9WGWpvB_oybp_SyFoEV3-JymlOdWzQJpKISpecAVfKdMZSkqwgZOjFlDB_U6qRbJG8dgHomA1P_1xSdXmGRwYVH1EcJuNnFGy9uFU09VbGcFIC48ADeyqkPWPx7x-dHRKysaJrnAyx13Gu533iGRSivQrrFVsefBriQRymLXEqbBTO6vpBrXO9ZtfBDzbE88KfAmWl8JxwYqEuzX3vVQqWgjkM1iyqkBh4z7M1N6rcIVcw5zkCKwDfUxM9aCK32GQQIvi_wYqa7D9uy08W1yrYoWsYTU-BaFBEfJfuwccb3_9gLZePSroBF2binyhke-uTEDhzXYI5SkyBXU1ESXoxfF01H3XNz86iHdShd3V6EdxIvYwbV4G_88s9tC3Kp233nJGFGHFrxiPu79KxDTFhldwOjaiPGkU3qKtkeo83sm1WyD58CXuzjxmVODGO9-1JUT2QmxJPUUp0hIGnN3020OiR0pNoHxxRbf9AyCPFK7NLhjTHVs6_yZEeEJ4-9e2vrIONmmIFpl9Uw3jhjUYKKEt144ZWCjq66Bsmsa8=w1059-h802-s-no-gm?authuser=0https://lh3.googleusercontent.com/pw/ABLVV85v_nxTxsBdjxJrMGNwTexZ2GL092hjhG2uDFoWB3TFLbpqwFJkYL9l3pAK_YA6_vob1O1cELXzS0mWqeTwLiGBd5738MT6r6O79MBqrrqc-pb26yU6g9DnLsOwi9cplQR0VokCX1jM0ZDbcWxtgqZ-60Trq5XAa8Jx-2mD9Xd8nkebTOm0CX3dbZLOY1nUVwhlilGGqA0rzE8TEHqmmsCGVdxPn-4xxXGgxOuI01d2kF0yH6IuibTqYQ_5iZvZspIY0E0k6c2hP5qbkYecoU326cfZy1-FYgJmTS9hByK04aI7BK5RvU7I-kct4f8SnDKLC3CaHS0iEr-sA3kcljFWsN2hqbRdm71Ot70ry0wHU14t3R1p0du7PacSlV2s9D0RYe0dzFiNKhdUito9DTzs2k43bFkJ_mbPIUlVH9KNeyn7L82s7_WQCQDiqt5EpUcgHDpRye16mH52M7YHx8DLgBpC0CkR2eCTFo9pt2viMVgiIPxizrKJTXrdo2JpIzTeAX5mJAWyBbt-g4ld7JcM4-Qq8WIAR9rTH5HJmxr4MbeXQHan-bsYH8HilnN-KSkXNFZructWKyMgD8Qz39-La876lF6sSyErOLIE9c65geMCbcF0nis8RXPZ8Svi4VNLMSDzMHTWHNSV2zLqlevc_eJXmtggrc6mkqQBaQ0ard3z5AwiQlSbpDmdNy3GZd2zUzqg8Nv_inQ8TN76RK5rSjOtV3_qGB02HoQf2_N7kGHccXbUYBb1iX47qSZm6_ecEY7lh55oqkgr41Nhx5Q2ohUXIDI7dwz6Wq12rDHKtSL8R3Lgs5vA_8gmIbczCTRQ4FZg_Oj-p8ir_Fp1nTowTgkYtexn5AbvZDp4R9BU5nZr2Ib2XrloJ_5dDkg1bn0=w1059-h802-s-no-gm?authuser=0https://lh3.googleusercontent.com/pw/ABLVV85v_nxTxsBdjxJrMGNwTexZ2GL092hjhG2uDFoWB3TFLbpqwFJkYL9l3pAK_YA6_vob1O1cELXzS0mWqeTwLiGBd5738MT6r6O79MBqrrqc-pb26yU6g9DnLsOwi9cplQR0VokCX1jM0ZDbcWxtgqZ-60Trq5XAa8Jx-2mD9Xd8nkebTOm0CX3dbZLOY1nUVwhlilGGqA0rzE8TEHqmmsCGVdxPn-4xxXGgxOuI01d2kF0yH6IuibTqYQ_5iZvZspIY0E0k6c2hP5qbkYecoU326cfZy1-FYgJmTS9hByK04aI7BK5RvU7I-kct4f8SnDKLC3CaHS0iEr-sA3kcljFWsN2hqbRdm71Ot70ry0wHU14t3R1p0du7PacSlV2s9D0RYe0dzFiNKhdUito9DTzs2k43bFkJ_mbPIUlVH9KNeyn7L82s7_WQCQDiqt5EpUcgHDpRye16mH52M7YHx8DLgBpC0CkR2eCTFo9pt2viMVgiIPxizrKJTXrdo2JpIzTeAX5mJAWyBbt-g4ld7JcM4-Qq8WIAR9rTH5HJmxr4MbeXQHan-bsYH8HilnN-KSkXNFZructWKyMgD8Qz39-La876lF6sSyErOLIE9c65geMCbcF0nis8RXPZ8Svi4VNLMSDzMHTWHNSV2zLqlevc_eJXmtggrc6mkqQBaQ0ard3z5AwiQlSbpDmdNy3GZd2zUzqg8Nv_inQ8TN76RK5rSjOtV3_qGB02HoQf2_N7kGHccXbUYBb1iX47qSZm6_ecEY7lh55oqkgr41Nhx5Q2ohUXIDI7dwz6Wq12rDHKtSL8R3Lgs5vA_8gmIbczCTRQ4FZg_Oj-p8ir_Fp1nTowTgkYtexn5AbvZDp4R9BU5nZr2Ib2XrloJ_5dDkg1bn0=s250-k-rw-no",

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
      <Card className="certification-card">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            classNames="certificate.image"
            onClick={() => window.open(certificates[currentImageIndex].link)}
            src={certificates[currentImageIndex].imageUrl}
          />
        </CardBody>
      </Card>
      <div className="navigation-arrows">
        <span onClick={() => handleNextClick(-1)}>
          <ArrowBackIosIcon /> Back{" "}
        </span>
        <span> {" "}{" "}</span>
        <span onClick={() => handleNextClick(1)}>
          {" "}   {" "}
          Next <ArrowForwardIosIcon />
        </span>
      </div>
    </div>
  );
};
