import CenteredContent from 'components/atoms/CenteredContent/CenteredContent';
import { ReactNode } from 'react';
import Divider from '../../atoms/Divider/Divider';
import Logo from '../../molecules/Logo/Logo';
import { BaseHeaderStyles } from './BaseHeader.styles';

const BaseHeader: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <BaseHeaderStyles.Header>
      <CenteredContent size="lg">
        <BaseHeaderStyles.StyledContainer>
          <BaseHeaderStyles.LogoContainer>
            <Logo />
          </BaseHeaderStyles.LogoContainer>
          {children}
        </BaseHeaderStyles.StyledContainer>
      </CenteredContent>
      <Divider />
    </BaseHeaderStyles.Header>
  );
};

export default BaseHeader;
