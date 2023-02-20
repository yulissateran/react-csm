import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const PostDetailPage = React.lazy(() => import('./pages/PostDetailPage'));
const Home = React.lazy(() => import('./pages/HomePage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const EditPostPage = React.lazy(() => import('./pages/EditPostPage'));
const CreatePostPage = React.lazy(() => import('./pages/CreatePostPage'));
const Contact = React.lazy(() => import('./pages/ContactPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'blog/create',
        element: <CreatePostPage />,
      },
      {
        path: 'blog/edit/:postId',
        element: <EditPostPage />,
      },
      {
        path: 'blog/post-detail/:postId',
        element: <PostDetailPage />,
      },
    ],
  },
]);
