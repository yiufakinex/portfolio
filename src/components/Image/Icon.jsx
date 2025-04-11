import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Icon = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 55, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) {
        return null;
      }

      const imageData = getImage(image.node.childImageSharp.gatsbyImageData);
      return <GatsbyImage alt={alt} image={imageData} />;
    }}
  />
);

Icon.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default Icon;
