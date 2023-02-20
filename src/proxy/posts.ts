import { PostInterface } from '../domain/post.interface';
import { MOCK_POSTS } from '../__mocks__/posts.mock';

const postsStorageKey = 'posts';
const decode = (stringifiedPosts: string | null) => (stringifiedPosts ? JSON.parse(stringifiedPosts) : null);
const encode = <T>(value: T) => JSON.stringify(value);

const initPosts = (): void => {
  if (getPosts().length === 0) {
    localStorage.setItem(postsStorageKey, JSON.stringify(MOCK_POSTS));
  }
};

const getPosts = (): PostInterface[] => decode(localStorage.getItem(postsStorageKey)) || [];

const getPost = (id: string): PostInterface => {
  const post = decode(localStorage.getItem(postsStorageKey))?.find((post: PostInterface) => id === post.id);
  if (!post) {
    throw new Error(`Not found post with id ${id}`);
  }

  return post;
};

const createPost = (post: Omit<PostInterface, 'stringifiedDescription'>): void => {
  const prevPosts = decode(localStorage.getItem(postsStorageKey)) || [];

  localStorage.setItem(postsStorageKey, encode([post, ...prevPosts]));
};

const updatePost = (post: PostInterface): void => {
  const prevPosts = decode(localStorage.getItem(postsStorageKey)) || [];
  const updatedPosts = prevPosts.map((item: PostInterface) => {
    if (item.id === post.id) {
      return post;
    }

    return item;
  });

  localStorage.setItem(postsStorageKey, encode(updatedPosts));
};

export const PostsProxy = {
  initPosts,
  getPosts,
  getPost,
  createPost,
  updatePost,
};
