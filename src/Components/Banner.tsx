import { useState, useEffect } from "react";
import { Row,Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Banner= () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const toRotate = ["Web Developer", "UI/UX Designer", "Software Architecture"];
    const [text, setText]= useState('');
    const [delta, setDelta]= useState(150-Math.random()*50);
    const period= 1000;

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text, delta])

const tick =()=>{
    let i =loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }
    if (!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150 - Math.random() * 50);

    }
}
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className= {isVisible ? "animate__flipInY" : ""}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi i'm Ezra Kimutai `}<span className="wrap">{text}</span></h1>
                        <p>I am a passionate Software Developer who aims at solving real world problems using technology. Advancing my skills and learning new ones is what I enjoy doing the most. Dive deeper into my projects and skills to see what I can bring to the table!</p>
                        <button onClick={()=> console.log('connect')}>Lets connect <ArrowRightCircle size={25} /> </button>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>                  
                    </Col>
                </Row>
            </Container>

        </section>
    )
}