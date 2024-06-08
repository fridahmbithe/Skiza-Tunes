import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import LazyLoad from 'react-lazyload';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  
  
  //const { headerImg } = this.props;

  const handleClick = () => {
    window.location.href = 'tel:+254112579157';
  };

  return (
    <section className="banner" id="home">
      <Container className="bg-blue-500">
        <Row className="aligh-items-center">
          
        </Row>
      </Container>
    </section>
  );
};
