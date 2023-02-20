import PostForm from 'components/templates/PostEditionForm/PostEditionForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsProxy } from '../proxy/posts';

const CreatePostPage = () => {
  const [post, setPost] = useState({ title: '', subtitle: '', description: '' });
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  return (
    <PostForm
      titleControl={{
        label: 'Title',
        placeholder: 'Title',
      }}
      subtitleControl={{
        label: 'Subtitle',
        placeholder: 'Subtitle',
      }}
      descriptionControl={{
        label: 'Tell your story',
        placeholder: 'Tell your story',
      }}
      onChange={({ value }) => {
        setPost(value);
        setIsValid(Boolean(value.title && value.description));
      }}
      onClick={() => {
        PostsProxy.createPost({
          ...post,
          id: Date.now().toString(),
          tags: ['Branding'],
          publishedDateDescription: '5 minutes ago',
          imageURL: 'https://miro.medium.com/fit/c/112/112/1*qDHxdjf90F2FFOL6NvdTBw.png',
          author: {
            name: 'Shreya Badonia',
            imageURL: 'https://miro.medium.com/fit/c/24/24/2*X3yqDXDNpnROTH7IdXHfhA.jpeg',
          },
        });
        navigate('/blog');
      }}
      buttonText="Publish"
      isValid={isValid}
    />
  );
};

export default CreatePostPage;
