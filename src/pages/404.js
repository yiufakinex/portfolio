import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

const NotFoundPage = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="hero-title text-center">
                Sorry, this path does not exist{' '}
                <span role="img" aria-label="emoji">
                  😞
                </span>
              </h1>
              <p className="hero-cta text-center">
                <Link className="cta-btn cta-btn--hero" to="/">
                  Go back
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;