import { CLOTHESLIST } from 'Constants/weatherConfig';
import React from 'react';
import styled from 'styled-components';

const highlightKeywords = (text: string, keywords: string[]): React.ReactNode => {
  let lastIndex = 0;
  const parts: React.ReactNode[] = [];
  const regex = new RegExp(keywords.join('|'), 'gi');

  text.replace(regex, (match, offset) => {
    const beforeText = text.slice(lastIndex, offset);
    if (beforeText) {
      parts.push(beforeText);
    }

    parts.push(
      <SSpan key={offset} className='highlighted'>
        {match}
      </SSpan>,
    );

    lastIndex = offset + match.length;
    return match;
  });

  const restText = text.slice(lastIndex);
  if (restText) {
    parts.push(restText);
  }

  return parts;
};

interface WeatherDescriptionProps {
  description: string;
}

const WeatherDescription: React.FC<WeatherDescriptionProps> = ({ description }) => {
  const highlightedDescription = highlightKeywords(description, CLOTHESLIST);

  return <div>{highlightedDescription}</div>;
};
const SSpan = styled.span`
  color: orange;
  font-weight: bold;
`;

export default WeatherDescription;
