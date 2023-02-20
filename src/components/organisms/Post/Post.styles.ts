import Flex from 'components/atoms/Flex/Flex';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextComponent from '../../atoms/Text/Text';

const Container = styled.div`
  padding-top: 24px;
`;

const BodyText = styled.div`
  flex: 1 1 auto;
`;

const Footer = styled(Flex)`
  padding: 16px 0;
`;

const Description = styled(TextComponent)`
  display: none;
  margin-top: 8px;

  ${({ theme }) => theme.mediaQueries.tablet} {
    display: -webkit-box;
  }
`;

const Title = styled(TextComponent)`
  margin-top: 12px;
`;

const DateSeparator = styled(TextComponent)`
  margin: 0 4px;
`;

const ImageContainer = styled.div`
  margin-left: 16px;

  img {
    width: 80px;
    height: 56px;
    object-fit: cover;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    margin-left: 60px;
  }
`;

const LinkEdit = styled(Link)`
  color: ${({ theme }) => theme.palette.textLink};
`;

export const PostStyles = {
  Container,
  Footer,
  ImageContainer,
  Description,
  BodyText,
  DateSeparator,
  LinkEdit,
  Title,
};
