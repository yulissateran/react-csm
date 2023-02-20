import { fireEvent, render, screen } from '@testing-library/react';
import EditPostPage from 'pages/EditPostPage';
import { PostsProxy } from 'proxy/posts';
import * as RouterModule from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { MOCK_POSTS } from '__mocks__/posts.mock';

const mockNavigate: RouterModule.NavigateFunction = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({ postId: '1' }),
}));

describe('EditPostPage', () => {
  it('should render', () => {
    window.localStorage.setItem('posts', JSON.stringify(MOCK_POSTS));
    render(
      <ThemeProvider theme={theme}>
        <EditPostPage />
      </ThemeProvider>,
    );

    const title = screen.getByLabelText('Title');
    expect(title).toHaveValue('7 Reasons I Am Happy Being a Small Creator');

    expect(screen.getByText('Save and publish')).toBeInTheDocument();
    expect(screen.getByText('Save and publish').closest('button')).toBeDisabled();
  });

  it('should update post and redirect to /blog', () => {
    window.localStorage.setItem('posts', JSON.stringify(MOCK_POSTS));
    jest.spyOn(PostsProxy, 'updatePost');

    render(
      <ThemeProvider theme={theme}>
        <EditPostPage />
      </ThemeProvider>,
    );

    const titleInput = screen.getByLabelText('Title');
    const descriptionTextarea = screen.getByLabelText('Tell your story');

    fireEvent.change(titleInput, { target: { value: '7 Reasons I Am Happy Being a Small Creator | updated' } });
    fireEvent.change(descriptionTextarea, {
      target: { value: 'journey - destination — You can’t go a day without thinking about numbers if you’re a creator. | updated' },
    });

    const publishButton = screen.getByText('Save and publish').closest('button') as HTMLButtonElement;
    expect(publishButton).toBeEnabled();

    fireEvent.click(publishButton);

    expect(PostsProxy.updatePost).toHaveBeenCalledWith({
      author: {
        imageURL: 'https://miro.medium.com/fit/c/24/24/2*X3yqDXDNpnROTH7IdXHfhA.jpeg',
        name: 'Shreya Badonia',
      },
      description: 'journey - destination — You can’t go a day without thinking about numbers if you’re a creator. | updated',
      id: '1',
      imageURL: 'https://miro.medium.com/fit/c/112/112/1*Jzc1JVlXDOv0DqMx-y7qkg.jpeg',
      publishedDateDescription: '1 day ago',
      subtitle: 'journey - destination',
      tags: ['Creator Economy'],
      title: '7 Reasons I Am Happy Being a Small Creator | updated',
    });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/blog');
  });
});
