import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Strong knowledge of modern JavaScript and TypeScript. Skilled in building dynamic web applications using frameworks like React</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                <img src={"url(./src/assets/img/meter1.svg)"} alt="IMG" />
                                    <h5>Web Development</h5>
                                </div>
                                <div>
                                <img src={"url(./src/assets/img/meter2.svg)"} alt="IMG" />
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div>
                                <img src={"url(./src/assets/img/meter2.svg)"} alt="IMG" />
                                    <h5>Graphic Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </col>
                </Row>
            </Container>
            <img src={"url(./src/assets/img/color-sharp.png)"} alt="Header Img" />
        </section>
    )
}

export default Skills