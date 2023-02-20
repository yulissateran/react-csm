import Flex from 'components/atoms/Flex/Flex';
import { PostInterface } from '../../../domain/post.interface';
import ImageComponent from '../../atoms/ImageComponent/ImageComponent';
import TextComponent from '../../atoms/Text/Text';
import { AuthorStyles } from './Author.styles';

const Author: React.FC<PostInterface['author']> = ({ imageURL, name }) => {
  return (
    <Flex alignItems="center">
      <ImageComponent src={imageURL} alt={name} isRounded />
      <AuthorStyles.Name alignItems="flex-end">
        <TextComponent>{name}</TextComponent>
      </AuthorStyles.Name>
    </Flex>
  );
};

export default Author;
