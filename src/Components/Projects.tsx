import { Col, Container, Tab,  Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Tawi.png";
import projImg2 from "../assets/img/Home Anywhere.png";
import projImg3 from "../assets/img/bookstore.png";
import projImg4 from "../assets/img/work-3.jpg";
import projImg5 from "../assets/img/project-img1.png";
import projImg6 from "../assets/img/architect.jpg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';




export const Projects = () => {

    const projects = [
    {   title: "Restaurant Services",
        description: "Tawi food Services",
        imgUrl: projImg1,
    },
    {   title: "House Hunting",
        description: "Design & Development",
        imgUrl: projImg2,
    },
    {   title: "Education Services",
        description: "Bookstore",
        imgUrl: projImg3,
    }, 
    {
        title: "Business",
        description: "Business Startup",
        imgUrl: projImg4,
      },
      {
        title: "Hiking & Entertainment",
        description: "Travel The World",
        imgUrl: projImg5,
      },
      {
        title: "Architecture",
        description: "ImperialDesigns.com ",
        imgUrl: projImg6,
      },
    ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className= {isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Projects</h2>
                    <p>Welcome to the Projects section of my portfolio! Here, you'll find a showcase of my work, highlighting a diverse range of projects that demonstrate my skills and passion for web development.</p>
                    </div>}
                    </TrackVisibility>
             <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                             <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return(
                                    <ProjectCard
                                      key={index}
                                      {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    COMING SOON!!!
                </Tab.Pane>
                <Tab.Pane eventKey="third">COMING SOON!!</Tab.Pane>
            </Tab.Content>   
            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Color"></img>
        </section>
    )
}
export default Projects;
    