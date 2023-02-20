import { ButtonStyles } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'unstyled' | 'basic' | 'primary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  return (
    <ButtonStyles.Button type="button" variant={variant} {...props}>
      {children}
    </ButtonStyles.Button>
  );
};

export default Button;
