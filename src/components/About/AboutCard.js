import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Najwa Jamali</span>
            from <span className="purple"> Casablanca, marocco.</span>
            <br />
              I am currently  data sacience student in alx 
              I have completed my studis in Ofppt  as Full stack web developper             <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Watching series
            </li>
            <li className="about-activity">
              <ImPointRight /> developing website
            </li>
            <li className="about-activity">
              <ImPointRight /> walk alone
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Najwa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
