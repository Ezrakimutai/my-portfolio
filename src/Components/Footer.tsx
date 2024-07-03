import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <img src={"url(../src/assets/img/logo.svg)"} alt="Header Img" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <img src={"url(../src/assets/img/nav-icon1.svg)"} alt="Header Img" />
            <img src={"url(../src/assets/img/nav-icon2.svg)"} alt="Header Img" />
            <img src={"url(../src/assets/img/nav-icon3.svg)"} alt="Header Img" />
            </div>
            <p>Copyright 2024. Ezra Kimutai</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer