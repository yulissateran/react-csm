import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { FC } from 'react';
import styled from 'styled-components';

const VideoWidget = styled.div`
  iframe {
    border-radius: 8px;
    height: 150px;
    width: 100%;

    ${({ theme }) => theme.mediaQueries.tablet} {
      height: 300px;
    }
  }
`;

export interface VideoItem {
  title: string;
  description: string;
  URL: string;
}

const VideoNote: FC<VideoItem> = ({ title, description, URL }) => {
  return (
    <VideoWidget>
      <Heading type="h3" bold variant="Medium2">
        {title}
      </Heading>
      <Paragraph noOfLines={2}>{description}</Paragraph>
      <iframe
        src={URL}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </VideoWidget>
  );
};

export default VideoNote;
