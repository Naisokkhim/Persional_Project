import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileImage from "../assets/images/profile.png";
import supaBase from "../assets/images/-zEL9B5-supabase-icon.svg";
import laravel from "../assets/images/laravel.svg";
import {
  FaGithub,
  FaFacebook,
  FaTelegram,
  FaReact,
  FaJs,
  FaCss3,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center my-5">
      <Row
        className=" my-5 d-flex justify-content-center align-items-center fRow"
        style={{ gap: "200px" }}
      >
        <Col className=" d-flex flex-column justify-content-center align-items-start text-start gap-1">
          <h1 className=" fw-bolder" style={{ width: "400px" }}>
            Hello,I'm full-stack <br />
            Developer 👋
          </h1>
          <p>
            I am passionate about coding,
            <br />
            experienced in web development,
            <br /> and always seeking opportunities to grow my skills.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <FaGithub size={30} className="onHover" title="GitHub" />
            <FaFacebook size={30} className="onHover" title="Facebook" />
            <FaTelegram size={30} className="onHover" title="Telegram" />
          </div>
        </Col>
        <Col>
          <img
            src={profileImage}
            alt="profile"
            style={{
              filter: "drop-shadow(0 0 0.2rem gray)",
            }}
          />
        </Col>
      </Row>
      <Row className="w-100 align-items-start" style={{ marginLeft: "24rem" }}>
        <Col className="d-flex gap-4">
          <p className="fw-bolder  ">Tech Skill |</p>
          <FaReact color="#00FFFF" size={30} className="ms-2 moving onHover" />
          <FaJs color="#FFD700" size={30} className=" onHover" />
        <FaBootstrap color="#7952B3" size={30} className=" onHover" />
          <FaHtml5 color="#FF4500" size={30} className=" onHover" />
          <img src={supaBase} alt="supaBase" className="onHover logoSize"/>
          <img src={laravel} alt="laravel "className="onHover logoSize" />
        </Col>
      </Row>
    </Container>
  );
}
