import { fireEvent, render, screen } from '@testing-library/react';
import CreatePostPage from 'pages/CreatePostPage';
import { PostsProxy } from 'proxy/posts';
import * as RouterModule from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

const mockNavigate: RouterModule.NavigateFunction = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('CreatePostPage', () => {
  fit('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <CreatePostPage />
      </ThemeProvider>,
    );

    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Tell your story')).toBeInTheDocument();
    expect(screen.getByText('Publish')).toBeInTheDocument();

    expect(screen.getByText('Publish').closest('button')).toBeDisabled();
  });

  fit('should create post and redirect to /blog', () => {
    jest.useFakeTimers();
    jest.setSystemTime(1676775744614);
    jest.spyOn(PostsProxy, 'createPost');

    render(
      <ThemeProvider theme={theme}>
        <CreatePostPage />
      </ThemeProvider>,
    );

    const titleInput = screen.getByLabelText('Title');
    const descriptionTextarea = screen.getByLabelText('Tell your story');

    fireEvent.change(titleInput, { target: { value: '10 Things You Probably Didn’t Know About Chrome Debugging ' } });
    fireEvent.change(descriptionTextarea, { target: { value: 'Because no one told you it was possible — until now ' } });

    const publishButton = screen.getByText('Publish').closest('button') as HTMLButtonElement;
    expect(publishButton).toBeEnabled();

    fireEvent.click(publishButton);

    expect(PostsProxy.createPost).toHaveBeenCalledWith({
      author: {
        imageURL: 'https://miro.medium.com/fit/c/24/24/2*X3yqDXDNpnROTH7IdXHfhA.jpeg',
        name: 'Shreya Badonia',
      },
      description: 'Because no one told you it was possible — until now ',
      id: '1676775744614',
      imageURL: 'https://miro.medium.com/fit/c/112/112/1*qDHxdjf90F2FFOL6NvdTBw.png',
      publishedDateDescription: '5 minutes ago',
      tags: ['Branding'],
      title: '10 Things You Probably Didn’t Know About Chrome Debugging ',
      subtitle: '',
    });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/blog');
    jest.useRealTimers();
  });
});
