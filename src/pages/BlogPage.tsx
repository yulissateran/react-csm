import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Container from 'components/atoms/Container/Container';
import Post from 'components/organisms/Post/Post';
import { useEffect, useState } from 'react';
import { parseHTMLToText } from 'utilities/stringify-html';
import { PostInterface } from '../domain/post.interface';
import { PostsProxy } from '../proxy/posts';

const BlogPage = () => {
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
    <Container>
      <CenteredContent>
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              editPath={`edit/${post.id}`}
              detailtPath={`post-detail/${post.id}`}
              tags={post.tags}
              title={post.title}
              subtitle={post.subtitle}
              description={parseHTMLToText(post.description)}
              publishedDateDescription={post.publishedDateDescription}
              imageURL={post.imageURL}
              author={post.author}
              id={post.id}
            />
          ))}
        </div>
      </CenteredContent>
    </Container>
  );
};

export default BlogPage;
