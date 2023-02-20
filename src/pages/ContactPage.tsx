import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Container from 'components/atoms/Container/Container';
import Flex from 'components/atoms/Flex/Flex';
import Heading from 'components/atoms/Heading/Heading';
import TextComponent from 'components/atoms/Text/Text';

const ContactPage = () => {
  return (
    <Container>
      <CenteredContent>
        <Heading type="h3" variant="Large1">
          Contact information
        </Heading>
        <Flex flexDir="column" gap="spacing4">
          <Flex flexDir="column">
            <TextComponent bold>Phone number:</TextComponent>
            <TextComponent>+51 999-345-042</TextComponent>
          </Flex>
          <Flex flexDir="column">
            <TextComponent bold>Email address:</TextComponent>
            <TextComponent>noreply@gmail.com</TextComponent>
          </Flex>
        </Flex>
      </CenteredContent>
    </Container>
  );
};

export default ContactPage;
