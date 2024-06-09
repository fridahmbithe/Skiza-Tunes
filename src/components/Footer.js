import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import gmailicon from "../assets/img/gmailicon.svg";

export const Footer = () => {
  return (
    <footer className="footer ">
      <Container className="mb-4">
        <Row className="align-items-center justify-content-between ">
          <Col size={12} sm={6}>
            <p className="mb-4">Fridah Mbithe Taabu &copy; 2024</p>
          </Col>
          
        </Row>
      </Container>
    </footer>
  )
}
