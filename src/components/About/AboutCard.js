import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alagu Sundaram </span>
            from <span className="purple"> Thanjavur, India.</span>
            <br />
            I am currently Intern as a software developer at Defooled.
            <br />
            I have completed B.E Computer science & Engineering(CSE) at SVCT
            Chennai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Diary
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Fiction story
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Keep Learning to stay ahead,Make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Alagu Sundaram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
