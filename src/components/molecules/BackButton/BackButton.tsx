import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import TextComponent from '../../atoms/Text/Text';

const BackButton: FC<{ text?: string }> = ({ text = 'Back' }) => {
  const navigate = useNavigate();

  return (
    <Button variant="unstyled" onClick={() => navigate(-1)}>
      <TextComponent color="darkNotBlack">&larr; {text}</TextComponent>
    </Button>
  );
};

export default BackButton;
