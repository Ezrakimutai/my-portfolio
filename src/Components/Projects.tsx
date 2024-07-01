import { title } from "process";
import { Container, Row, Col, Tab, Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import 'animate.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {

    const projects = [
        {
            title: "Imperial Designs",
            description: "Architecture",
            imgUrl: './src/assets/img/Logo.png',
        },
        {
            title: "Tawi Kitchen & Events",
            description: "Web Design",
            imgUrl: './src/assets/img/Tawi.png',
        },
        {
            title: "Book Store",
            description: "Education",
            imgUrl: './src/assets/img/bookstore.png',
        },
    ];

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <col>
                            <h2> Projects </h2>
                            <p></p>
                            <Tab.Container id="projects-tabs" defaultActiveKey='first'>
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

                                    <TabContent>
                                        <TabPane eventKey='first'>
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </TabPane>
                                        <TabPane eventKey='second'>Web development </TabPane>
                                        <TabPane eventKey='third'>UI/UX Design</TabPane>
                                    </TabContent>
                                </Nav>
                            </Tab.Container>
                        </col>
                    </Row>

                </Container>
                <img src={"url(./src/assets/img/header-img.svg)"} alt="Header " />
            </section>
        </>
    )
}
export default Projects