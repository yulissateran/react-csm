import { act, render, RenderResult, screen } from '@testing-library/react';
import App from 'App';
import * as RouterModule from 'react-router-dom';
import { appRouter } from 'router';
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

const renderComponent = async (): RenderResult => {
  let component = {} as RenderResult;
  await act(async () => {
    component = render(
      <ThemeProvider theme={theme}>
        <RouterModule.RouterProvider router={appRouter} />
        <RouterModule.MemoryRouter initialEntries={['/']} initialIndex={1}>
          <App />
        </RouterModule.MemoryRouter>
      </ThemeProvider>,
    );
  });

  return component;
};

describe('App', () => {
  it('should render', async () => {
    await renderComponent();

    expect(screen.getAllByLabelText('Medium logo').length).toEqual(2);
    expect(screen.getAllByText('Home').length).toEqual(2);
    expect(screen.getAllByText('About').length).toEqual(2);
    expect(screen.getAllByText('Blog').length).toEqual(2);
    expect(screen.getAllByText('Contact').length).toEqual(2);

    expect(screen.getByAltText('Woman holding a sparkler light')).toHaveAttribute(
      'src',
      'https://images.unsplash.com/photo-1421986527537-888d998adb74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    );

    expect(screen.getByText('Trending on Medium')).toBeInTheDocument();
    expect(screen.getByText('Discover more of what matters to you')).toBeInTheDocument();
    expect(screen.getByText('10 Things You Probably Didn’t Know About Chrome Debugging')).toBeInTheDocument();
    expect(screen.getByText(/Because no one told you it was possible — until now/)).toBeInTheDocument();

    expect(screen.getByTitle('10 Things You Probably Didn’t Know About Chrome Debugging')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/H0XScE08hy8?rel=0&modestbranding=1&controls=0',
    );

    const [firstEditButton, seconEditButton] = screen.getAllByText('Edit');
    expect(screen.getByText(MOCK_POSTS[0].title).closest('a')).toHaveAttribute('href', '/blog/post-detail/1676835907980');
    expect(screen.getByText(MOCK_POSTS[0].title)).toBeInTheDocument();
    expect(screen.getByText(parseHTMLToText(MOCK_POSTS[0].description))).toBeInTheDocument();
    expect(screen.getByText('Creator Economy')).toBeInTheDocument();
    expect(firstEditButton.closest('a') as HTMLAnchorElement).toHaveAttribute('href', '/blog/edit/1676835907980');

    expect(screen.getByText(MOCK_POSTS[1].title).closest('a')).toHaveAttribute('href', '/blog/post-detail/1676834970530');
    expect(screen.getByText(MOCK_POSTS[1].title)).toBeInTheDocument();
    expect(screen.getByText(parseHTMLToText(MOCK_POSTS[1].description))).toBeInTheDocument();
    expect(screen.getAllByText('Branding').length).toEqual(5);
    expect(seconEditButton.closest('a') as HTMLAnchorElement).toHaveAttribute('href', '/blog/edit/1676834970530');
  });
});
