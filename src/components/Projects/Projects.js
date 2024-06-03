import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Design sans titre (6).png";
import emotion from "../../Assets/Projects/Design sans titre (5).png";
import editor from "../../Assets/Projects/Design sans titre (4).png";
import chatify from "../../Assets/Projects/Design sans titre (7).png";
import suicide from "../../Assets/Projects/Design sans titre (2).png";
import bitsOfCode from "../../Assets/Projects/Design sans titre (3).png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="
              Bondi Theme
              "
              ghLink="https://github.com/najwaJamali/bondi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Twitter"
              ghLink="https://github.com/najwaJamali/twitter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Youtube-HTML-CSS"
              ghLink="https://github.com/najwaJamali/Youtube-HTML-CSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MvS Projet"
              ghLink="https://github.com/najwaJamali/MvSProjet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="frontend-Bootcamp "
              ghLink="https://github.com/najwaJamali/frontend-Bootcamp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Social Links Profile"
              ghLink="https://github.com/najwaJamali/SocialLinksProfile"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
