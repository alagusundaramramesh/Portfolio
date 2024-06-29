import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import FSD from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={FSD}
              isBlog={false}
              title="FSD-Facial Skin diseases Detection"
              description="Develop a machine learning model using Convolutional Neural Network (CNN) to identify various face skin diseases and infections. Train the model on a pre-existing dataset in a Jupyter notebook. then,upload an image of a skin defect to the trained model to classify the type of disease or infection present."
              ghLink="https://github.com/alagusundaramramesh/FSD"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MSB-MedSyncBlock"
              description="To Store undiagosis diseases and Collaborate with Healthcare centre, research centers and the pharmaceutical industry, enabling data sharing for medical innovation.Also integerated with chatbot to ask a suggestion,Ipfs using to store blockchain network and integrated web3 network using metamask."
              ghLink="https://github.com/alagusundaramramesh/medsyncblock"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blockpulse"
              description="Block pulse is a service-based website,  designed to collect and store user data, gather client requirements, and send acknowledgments. The website will be built using HTML, CSS, JavaScript, and SQL, with development managed through the Studio Kit tool."
              ghLink="https://github.com/alagusundaramramesh/Blockpulse"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio"
              description="This portfolio serves as a detailed showcase of my skills, projects, and professional experience, highlighting the technologies I've utilized such as React.js, Node.js, Express.js, and CSS3 also depolyed in vercelapp. It provides potential employers or clients with a thorough understanding of my capabilities and achievements in web development."
              ghLink="https://github.com/alagusundaram/Portfolio"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cafe"
              description="During my first internship, I developed a static website for a café and restaurant using HTML and CSS exclusively, showcasing my skills in front-end web development and successfully deployed it on GitHub Pages."
              ghLink="https://github.com/alagusundaramramesh/WebDev"
              demoLink="https://alagusundaramramesh.github.io/WebDev/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="E- Commerce Website"
              description="E-Commerce platform using React.js, MongoDB, Express, Axios, and JSON Web Tokens (JWT) to establish a polished and secure online shopping experience. By harnessing these technologies, the website emphasizes meticulous data management, streamlined backend operations, and dependable user authentication, ensuring a seamless and safeguarded journey for every shopper."
              ghLink="https://github.com/alagusundaramramesh/E-commerce"
              demoLink="https://alagusundaramramesh.github.io/WebDev/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
