import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Container from 'components/atoms/Container/Container';
import Main from 'components/atoms/Main/Main';
import TopButtonsContainer from 'components/atoms/TopButtonsContainer/TopButtonsContainer';
import BackButton from 'components/molecules/BackButton/BackButton';
import { WriteLink } from 'components/molecules/WriteLink/WriteLink';
import MainHeader from 'components/organisms/MainHeader/MainHeader';
import { MenuItemInterface } from 'domain/menu-item.interface';
import { PostsProxy } from 'proxy/posts';
import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MOCK_MENU } from '__mocks__/menu.mock';

const App = () => {
  const location = useLocation();
  const [suggestions, setSuggestions] = useState<MenuItemInterface[]>([]);

  const getSuggestions = (value: string) => {
    const posts: MenuItemInterface[] = PostsProxy.getPosts()
      .filter((post) => post.title.toLowerCase().includes(value.toLowerCase()))
      .map((post) => ({ path: `/blog/post-detail/${post.id}`, label: post.title }));

    setSuggestions(posts);
  };

  return (
    <>
      <MainHeader menuItems={MOCK_MENU} searchInputPlaceholder="Seach" getSuggestions={getSuggestions} suggestions={suggestions} />
      <Main>
        {location.pathname !== '/' && (
          <CenteredContent size="lg">
            <Container>
              <TopButtonsContainer>
                <BackButton />
                {location.pathname === '/blog' && <WriteLink to="/blog/create" text="Write" />}
              </TopButtonsContainer>
            </Container>
          </CenteredContent>
        )}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default App;
