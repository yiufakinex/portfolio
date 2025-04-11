import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const IndexPage = () => {
  const { title, lang, description } = headData;

  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "path/to/your-hero-image.jpg" }) {
        publicURL
      }
    }
  `);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        <meta name="keywords" content="Full, Stack, Fullstack, Web, Software, Developer, Engineer, Programmer, React, Javascript, Node, Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Franklin Burger | Dev" />
        <meta property="og:description" content="Full Stack Software Mobile and Web Developer" />
        <meta property="og:image" content="https://www.franklin-burger.dev/screen_shot.png" />
        <meta property="og:url" content="https://www.franklin-burger.dev/" />
      </Helmet>
      {data.heroImage && (
        <img src={data.heroImage.publicURL} alt="Hero" style={{ maxWidth: '100%', height: 'auto' }} />
      )}
      <App />
    </>
  );
};

export default IndexPage;
