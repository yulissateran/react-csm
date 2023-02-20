import NavLinkComponent from '../../atoms/NavLinkComponent/Link';
import { LogoStyles } from './Logo.styles';

export interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {
  variant?: 'responsive' | 'icon' | 'word';
  color?: 'white' | 'black';
}

const Logo: React.FC<LogoProps> = ({ variant = 'responsive', color = 'black', ...props }) => {
  return (
    <NavLinkComponent to="/">
      <LogoStyles.Logo variant={variant} $color={color} {...props} />
      <LogoStyles.MobileLogo variant={variant} $color={color} {...props} />
    </NavLinkComponent>
  );
};

export default Logo;
