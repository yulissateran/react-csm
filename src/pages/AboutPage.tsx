import Heading from 'components/atoms/Heading/Heading';
import TextComponent from 'components/atoms/Text/Text';
import AboutTemplate from '../components/templates/AboutTemplate';

const AboutPage = () => {
  return (
    <AboutTemplate
      title={
        <Heading variant="Large1">
          Every idea needs a{' '}
          <TextComponent bold variant="Large1">
            Medium
          </TextComponent>
        </Heading>
      }
      paragraphs={[
        `The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We are an
            open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices
            alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen
            understanding of the world.`,
        `We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in
            to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it is
            where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of
            collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.`,
      ]}
    />
  );
};

export default AboutPage;
