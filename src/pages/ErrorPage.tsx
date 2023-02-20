import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Container from 'components/atoms/Container/Container';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import TextComponent from 'components/atoms/Text/Text';
import TopButtonsContainer from 'components/atoms/TopButtonsContainer/TopButtonsContainer';
import BackButton from 'components/molecules/BackButton/BackButton';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  const errorDetail = error?.statusText || error?.message;

  return (
    <div>
      <Container>
        <CenteredContent>
          <TopButtonsContainer>
            <BackButton />
          </TopButtonsContainer>
        </CenteredContent>
        <CenteredContent>
          <Heading variant="Medium3" type="h3">
            Oops!
          </Heading>
          <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
          {errorDetail && <TextComponent tagAs="i">{errorDetail}</TextComponent>}
        </CenteredContent>
      </Container>
    </div>
  );
};

export default ErrorPage;
