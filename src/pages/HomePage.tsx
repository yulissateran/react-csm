import HomeTemplate from 'components/templates/HomeTemplate';
import { useEffect, useState } from 'react';
import { PostInterface } from '../domain/post.interface';
import { PostsProxy } from '../proxy/posts';
import { MOCK_HOME_NOTES } from '../__mocks__/homeInfo.mock';

const HomePage = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    const getPosts = () => {
      PostsProxy.initPosts();
      const postsResponse = PostsProxy.getPosts();
      setPosts(postsResponse);
    };

    getPosts();
  }, []);

  return (
    <HomeTemplate
      hero={MOCK_HOME_NOTES.hero}
      posts={posts}
      mainVideosList={MOCK_HOME_NOTES.mainVideosList}
      videosTitle="Trending on Medium"
      postsTitle="Discover more of what matters to you"
    />
  );
};

export default HomePage;
