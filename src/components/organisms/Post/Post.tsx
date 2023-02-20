import Flex from 'components/atoms/Flex/Flex';
import LinkComponent from 'components/atoms/LinkComponent/Link';
import { PostInterface } from '../../../domain/post.interface';
import Divider from '../../atoms/Divider/Divider';
import ImageComponent from '../../atoms/ImageComponent/ImageComponent';
import TextComponent from '../../atoms/Text/Text';
import Author from '../../molecules/Author/Author';
import Tag from '../../molecules/Tag/Tag';
import { PostStyles } from './Post.styles';

const Post: React.FC<PostInterface & { detailtPath: string; editPath: string }> = ({
  title,
  description,
  publishedDateDescription,
  tags,
  author,
  imageURL,
  detailtPath,
  editPath,
}) => {
  return (
    <PostStyles.Container>
      <div>
        <LinkComponent to={detailtPath}>
          <Flex alignItems="center">
            <Author imageURL={author.imageURL} name={author.name} />
            <PostStyles.DateSeparator>·</PostStyles.DateSeparator>
            <TextComponent variant="Tiny3">{publishedDateDescription}</TextComponent>
          </Flex>
          <Flex alignItems="center">
            <PostStyles.BodyText>
              <PostStyles.Title tagAs="h3" variant="Medium1" bold>
                {title}
              </PostStyles.Title>
              <PostStyles.Description noOfLines={2} tagAs="p">
                {description}
              </PostStyles.Description>
            </PostStyles.BodyText>

            <PostStyles.ImageContainer>
              <ImageComponent src={imageURL} alt={title} />
            </PostStyles.ImageContainer>
          </Flex>
        </LinkComponent>
        <PostStyles.Footer justifyContent="space-between">
          <div>
            {tags.map((tag: string) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <div>
            <PostStyles.LinkEdit to={editPath}>
              <TextComponent color="textLink" bold>
                Edit
              </TextComponent>
            </PostStyles.LinkEdit>
          </div>
        </PostStyles.Footer>
        <Divider />
      </div>
    </PostStyles.Container>
  );
};

export default Post;
