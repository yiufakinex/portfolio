import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
// import AboutImg from '../Image/AboutImg';
import AltAboutImg from '../Image/AltAboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume, linkedin, github, leetcode } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={750} delay={500} distance="30px">
              {/* <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div> */}
              <div className="about-wrapper__image">
                <AltAboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={750} delay={500} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                <div className="d-flex flex-row justify-content-left">
                {resume && (
                  <span className="mx-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
                {linkedin && (
                  <span className="mx-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={linkedin}
                    >
                      LinkedIn
                    </a>
                  </span>
                )}
                {github && (
                  <span className="mx-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={github}
                    >
                      Github
                    </a>
                  </span>
                )}
                {leetcode && (
                  <span className="mx-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={leetcode}
                    >
                      Leetcode
                    </a>
                  </span>
                )}
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
