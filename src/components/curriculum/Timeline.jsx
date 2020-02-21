import React from 'react';
import styled from 'styled-components';

const StyledTimeline = styled.div`
  margin: 0 16px 16px;
  display: grid;
`;

const StyledIntro = styled.p`
  em { font-style: italic; }
  p { margin-bottom: 16px; }
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 58px auto;
  margin: 16px 0 16px;
  .year {
    word-wrap: break-word;
    color: grey;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 920px) {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 920px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;

const Timeline = (props) => {
  return (
    <StyledTimeline>
      {props.intro && (
        <StyledIntro
          dangerouslySetInnerHTML={{ __html: props.intro.node.html }}
        />
      )}
      <div className={'timeline-items'}>
        <div className={'ruler'} />
        {props.items && props.items.map((item, idx) => (
          <StyledItem key={idx}>
            <div className={'year'}>{item.node.frontmatter.year}</div>
            <div className={'content'}
              dangerouslySetInnerHTML={{ __html: item.node.html}}
            />
          </StyledItem>
        ))}
      </div>
    </StyledTimeline>
  );
};

export default Timeline;
