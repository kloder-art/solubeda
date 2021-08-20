import React from 'react';
import styled from 'styled-components';
import { FaMapMarkedAlt, FaCloud } from 'react-icons/fa';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Close from '../Close';

const StyledPlace = styled.div`
  max-width: 980px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 6rem auto;
  h2 {
    font-size: 3rem;
    line-height: 4rem;
  }
  img {
    width: 100%;
  }

  @media only screen and (max-width: 980px) {
    & {
      grid-template-columns: auto;
      grid-template-rows: 1fr auto;
      margin: 2rem 0;
      padding: 1rem;
      h2 {
        font-size: 2rem;
      }
    }
  }
`;

const StyledLocation = styled.div`
  margin-top: 2rem;
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.1rem;
  }
`;

const Blog = ({ data, images, returnPage }) => {
  return (
    <>
      <Close url={returnPage} />
      <StyledPlace>
        <div>
          {images.map((item, idx) => (
            <div key={idx}>
              <img
                src={item.image.childImageSharp.original.src}
                alt={item.title || `${data.frontmatter.title} #${idx + 1}`}
              />
            </div>
          ))}
        </div>
        <div>
          <h2>{data.frontmatter.title}</h2>
          <MDXRenderer>{data.body}</MDXRenderer>

          <StyledLocation>
            <h3>{data.frontmatter.location.title}</h3>
            <h4>{data.frontmatter.location.subtitle}</h4>
            <address>
              <a
                href={data.frontmatter.location.map}
                target={'_blank'}
                rel={'noopener noreferer'}
              >
                <FaMapMarkedAlt /> {data.frontmatter.location.address}
              </a>
            </address>
            <div className={'web'}>
              <a
                href={data.frontmatter.location.web}
                target={'_blank'}
                rel={'noopener noreferer'}
              >
                <FaCloud /> {data.frontmatter.location.web}
              </a>
            </div>
          </StyledLocation>
        </div>
      </StyledPlace>
    </>
  );
};

export default Blog;
