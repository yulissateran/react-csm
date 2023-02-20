import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Container from 'components/atoms/Container/Container';
import Heading from 'components/atoms/Heading/Heading';
import PostForm from 'components/templates/PostEditionForm/PostEditionForm';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostInterface } from '../domain/post.interface';
import { PostsProxy } from '../proxy/posts';

const EditPostPage = () => {
  const [post, setPost] = useState<PostInterface | null>();
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState<any | undefined>();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = (id: string) => {
      const postResponse = PostsProxy.getPost(id);
      setPost(postResponse || null);
    };

    if (params.postId) {
      try {
        getPosts(params.postId);
      } catch (error) {
        setError(error);
      }
    }
  }, []);

  return (
    <>
      {post && (
        <PostForm
          titleControl={{
            label: 'Title',
            placeholder: 'Title',
            value: post.title,
          }}
          subtitleControl={{
            label: 'Subtitle',
            placeholder: 'Subtitle',
            value: post.subtitle,
          }}
          descriptionControl={{
            label: 'Tell your story',
            placeholder: 'Tell your story',
            value: post.description,
          }}
          onChange={({ value }) => {
            const titleHasChanged = value.title !== post.title;
            const subtitleHasChanged = value.subtitle !== post.subtitle;
            const descriptionHasChanged = value.description !== post.description;
            const allFieldsHaveValue = Boolean(value.title && value.description);
            setIsValid(Boolean(allFieldsHaveValue && (titleHasChanged || descriptionHasChanged || subtitleHasChanged)));
            setPost({ ...post, ...value });
          }}
          onClick={() => {
            PostsProxy.updatePost(post);
            navigate('/blog');
          }}
          buttonText="Save and publish"
          isValid={isValid}
        />
      )}
      {error && (
        <Container>
          <CenteredContent>
            <Heading variant="Medium2">Not found post</Heading>
          </CenteredContent>
        </Container>
      )}
    </>
  );
};

export default EditPostPage;
