import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Container from 'components/atoms/Container/Container';
import Heading from 'components/atoms/Heading/Heading';
import PostDetail from 'components/organisms/FormattedPostDetail/FormattedPostDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostInterface } from '../domain/post.interface';
import { PostsProxy } from '../proxy/posts';

const PostDetailPage = () => {
  const [post, setPost] = useState<PostInterface | null>();
  const params = useParams();

  useEffect(() => {
    const getPosts = (id: string) => {
      const postResponse = PostsProxy.getPost(id);
      setPost(postResponse || null);
    };

    if (params.postId) {
      getPosts(params.postId);
    }
  }, [params.postId]);

  return (
    <Container>
      <CenteredContent>
        {post && (
          <>
            <Heading variant="Large1" type="h1" bold>
              {post.title}
            </Heading>
            <Heading variant="Medium3" type="h1" bold color="gray">
              {post.subtitle}
            </Heading>
            <PostDetail html={post.description} />
          </>
        )}
        {!post && (
          <Heading variant="Medium3" type="h1">
            Not found post
          </Heading>
        )}
      </CenteredContent>
    </Container>
  );
};

export default PostDetailPage;
