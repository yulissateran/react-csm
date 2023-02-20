import styled from 'styled-components';

const StyledPostDetail = styled.div`
  img {
    max-height: 250px;

    ${({ theme }) => theme.mediaQueries.tablet} {
      max-height: unset;
    }
  }
`;

const PostDetail = ({ html }: { html: string }) => <StyledPostDetail dangerouslySetInnerHTML={{ __html: html }} />;

export default PostDetail;
