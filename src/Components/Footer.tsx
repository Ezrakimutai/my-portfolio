import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm/>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ezra-kimutai-20a287224"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100083594628866&mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/its_kimtai/?hl=en"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Ezra Kimutai.</p>
            <p><EmailIcon/> kimtaiezra02@gmail.com</p>
            <p><PhoneIcon/>+254702441101</p>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer