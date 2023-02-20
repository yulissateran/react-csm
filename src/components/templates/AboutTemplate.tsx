import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Container from 'components/atoms/Container/Container';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { ReactNode } from 'react';

const AboutTemplate = ({ title, paragraphs }: { title: ReactNode; paragraphs: string[] }) => {
  return (
    <Container>
      <CenteredContent>
        {title}
        {paragraphs.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </CenteredContent>
    </Container>
  );
};

export default AboutTemplate;
