import TextComponent from 'components/atoms/Text/Text';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    height: 0;
  }

  textarea {
    min-height: 150px;
  }

  textarea {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.palette.notQuiteBlack};
  }

  textarea {
    font-size: 16px;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
`;

const StyledTitleInput = styled(StyledInput)`
  font-size: 32px;
`;

const StyledSubtitleInput = styled(StyledInput)`
  font-size: 24px;
  color: ${({ theme }) => theme.palette.gray};
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
`;

const PreviewTitle = styled(TextComponent)`
  padding: 16px 0;
  display: block;
`;

const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
`;

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.offWhite};
  padding: 16px;
`;

export const FormStyles = {
  Form,
  StyledTextarea,
  StyledSubtitleInput,
  StyledTitleInput,
  Footer,
  PreviewTitle,
  PreviewContainer,
};
