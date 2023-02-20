import { render, screen } from '@testing-library/react';
import BlogPage from 'pages/BlogPage';
import * as RouterModule from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { parseHTMLToText } from 'utilities/stringify-html';
import { MOCK_POSTS } from '__mocks__/posts.mock';

const mockNavigate: RouterModule.NavigateFunction = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({ postId: '1' }),
}));

describe('BlogPage', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <RouterModule.BrowserRouter>
          <BlogPage />
        </RouterModule.BrowserRouter>
      </ThemeProvider>,
    );

    const [firstEditButton, seconEditButton] = screen.getAllByText('Edit');
    expect(screen.getByText(MOCK_POSTS[0].title).closest('a')).toHaveAttribute('href', '/post-detail/1676835907980');
    expect(screen.getByText(MOCK_POSTS[0].title)).toBeInTheDocument();
    expect(screen.getByText(parseHTMLToText(MOCK_POSTS[0].description))).toBeInTheDocument();
    expect(screen.getByText('Creator Economy')).toBeInTheDocument();
    expect(firstEditButton.closest('a') as HTMLAnchorElement).toHaveAttribute('href', '/edit/1676835907980');

    expect(screen.getByText(MOCK_POSTS[1].title).closest('a')).toHaveAttribute('href', '/post-detail/1676834970530');
    expect(screen.getByText(MOCK_POSTS[1].title)).toBeInTheDocument();
    expect(screen.getByText(parseHTMLToText(MOCK_POSTS[1].description))).toBeInTheDocument();
    expect(screen.getAllByText('Branding').length).toEqual(5);
    expect(seconEditButton.closest('a') as HTMLAnchorElement).toHaveAttribute('href', '/edit/1676834970530');
  });
});
