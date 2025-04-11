import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Tilt } from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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

  // Responsive on App Refresh only
  const videoOpts = {
    height: isMobile ? '202' : '360',
    width: isMobile ? '360' : '640',
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, info3, info4, url, awsdepo, frontrepo, awstdepo, backrepo, frontdepo, backdepo, imageUrl, imageAlt, id, contributors, stack, note } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={750}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <div className="tech-stack">
                          {stack.map((tech) => {
                            return (
                              <div className="tech" key={`stack-${tech}`}>
                                {tech}
                              </div>
                            );
                          })}
                        </div>
                        <p className="bold">
                          {contributors ? 'Collaborators: ' : 'Solo Project'}
                          <span className="italics">{contributors && contributors}</span>
                        </p>
                        <p>{info}</p>
                        <p className="bold italics">{info2}</p>
                        {info3 && <p dangerouslySetInnerHTML={{ __html: info3 }} />}
                        {info4 && <p dangerouslySetInnerHTML={{ __html: info4 }} />}
                        {note && <p className="italics note">Note: {note}</p>}
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url}
                        >
                          See Live
                        </a>
                      )}
                      {frontrepo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={frontrepo}
                        >
                          Frontend Source Code
                        </a>
                      )}
                      {backrepo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={backrepo}
                        >
                          Backend Source Code
                        </a>
                      )}
                      {awsdepo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={awsdepo}
                        >
                          AWS Terraform Code
                        </a>
                      )}
                      {awstdepo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={awstdepo}
                        >
                          AWS Terraform Traditional Approach Code
                        </a>
                      )}
                      {frontdepo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={frontdepo}
                        >
                          Frontend Deployment Code
                        </a>
                      )}
                      {backdepo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={backdepo}
                        >
                          Backend Deployment Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={750}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                        <img src={imageUrl} alt={imageAlt} className="project-image" />
                        </div>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
