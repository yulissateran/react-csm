import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import Columns from 'components/atoms/Columns/Columns';
import Container from 'components/atoms/Container/Container';
import Divider from 'components/atoms/Divider/Divider';
import Flex from 'components/atoms/Flex/Flex';
import Heading from 'components/atoms/Heading/Heading';
import HeroImage from 'components/molecules/HeroImage/HeroImage';
import Post from 'components/organisms/Post/Post';
import VideoNote from 'components/organisms/VideoNote/VideoNote';
import { PostInterface } from 'domain/post.interface';
import styled from 'styled-components';
import { parseHTMLToText } from 'utilities/stringify-html';

const SecondColumn = styled.div`
  flex: 1 150%;
`;

const HomeTemplate = ({
  posts,
  mainVideosList,
  hero,
  postsTitle,
  videosTitle,
}: {
  postsTitle: string;
  videosTitle: string;
  mainVideosList: {
    title: string;
    description: string;
    URL: string;
  }[];
  posts: PostInterface[];
  hero: {
    URL: string;
    altText: string;
  };
}) => {
  return (
    <Flex flexDir="column" gap="spacing5">
      <HeroImage src={hero.URL} alt={hero.altText} />
      <Container>
        <CenteredContent size="lg">
          <Columns>
            <div>
              <Flex flexDir="column">
                <Heading bold type="h2">
                  {videosTitle}
                </Heading>
                <Divider />
                {mainVideosList.map((video) => (
                  <VideoNote title={video.title} description={video.description} URL={video.URL} key={video.URL} />
                ))}
              </Flex>
            </div>
            <SecondColumn>
              <Flex flexDir="column">
                <Heading bold type="h2">
                  {postsTitle}
                </Heading>
                <Divider />
                {posts.map((post) => (
                  <Post
                    key={post.title}
                    editPath={`blog/edit/${post.id}`}
                    detailtPath={`blog/post-detail/${post.id}`}
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
              </Flex>
            </SecondColumn>
          </Columns>
        </CenteredContent>
      </Container>
    </Flex>
  );
};

export default HomeTemplate;
