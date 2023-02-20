import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Container from 'components/atoms/Container/Container';
import Divider from 'components/atoms/Divider/Divider';
import Heading from 'components/atoms/Heading/Heading';
import PostDetail from 'components/organisms/FormattedPostDetail/FormattedPostDetail';
import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import { FormStyles } from './PostEditionForm.styles';

export interface FormControl {
  label: string;
  placeholder: string;
  value?: string;
}

export interface PostFormProps {
  titleControl: FormControl;
  descriptionControl: FormControl;
  subtitleControl: FormControl;
  onChange: (params: { value: { title: string; description: string; subtitle: string } }) => void;
  onClick: () => void;
  isValid: boolean;
  buttonText: string;
}

const PostForm: React.FC<PostFormProps> = ({
  titleControl,
  subtitleControl,
  descriptionControl,
  buttonText,
  isValid,
  onChange,
  onClick,
}) => {
  const [title, setTitle] = useState(titleControl.value || '');
  const [subtitle, setSubTitle] = useState(subtitleControl.value || '');
  const [description, setDescription] = useState(descriptionControl.value || '');
  const showPreview = Boolean(title || subtitle || description);

  return (
    <Container>
      <CenteredContent>
        <FormStyles.Form>
          <label htmlFor="title">{titleControl.label}</label>
          <FormStyles.StyledTitleInput
            id="title"
            placeholder={titleControl.placeholder}
            value={title}
            onChange={({ target: { value } }) => {
              setTitle(value);
              onChange({ value: { title: value, description, subtitle } });
            }}
          />
          <label htmlFor="subtitle">{subtitleControl.label}</label>
          <FormStyles.StyledSubtitleInput
            id="subtitle"
            placeholder={subtitleControl.placeholder}
            value={subtitle}
            onChange={({ target: { value } }) => {
              setSubTitle(value);
              onChange({ value: { title, subtitle: value, description } });
            }}
          />
          <label htmlFor="description">{descriptionControl.label}</label>
          <FormStyles.StyledTextarea
            id="description"
            placeholder={descriptionControl.placeholder}
            value={description}
            onChange={({ target: { value } }) => {
              setDescription(value);
              onChange({ value: { title, description: value, subtitle } });
            }}
          />
        </FormStyles.Form>

        <FormStyles.Footer>
          <Button disabled={!isValid} onClick={onClick}>
            {buttonText}
          </Button>
        </FormStyles.Footer>
        {showPreview && (
          <>
            <Divider />
            <FormStyles.PreviewTitle color="statusGreen" bold variant="Medium1">
              Story Preview:
            </FormStyles.PreviewTitle>
          </>
        )}
        {showPreview && (
          <FormStyles.PreviewContainer>
            <div>
              {title && (
                <Heading variant="Large1" type="h1">
                  {title}
                </Heading>
              )}
              {subtitle && (
                <Heading color="gray" type="h2" variant="Medium2">
                  {subtitle}
                </Heading>
              )}
              {description && <PostDetail html={description} />}
            </div>
          </FormStyles.PreviewContainer>
        )}
      </CenteredContent>
    </Container>
  );
};

export default PostForm;
