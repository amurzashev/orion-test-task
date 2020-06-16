import styled from 'src/ui/styled';
import { Colors } from 'src/ui/styled/theme/colors';

type Appearance = 'default' | 'warning'
interface ButtonProps {
  appearance?: Appearance
}

const setColor = (appearance: Appearance, colors: Colors): string => {
  switch(appearance) {
  case 'default':
    return colors.primary.blue;
  case 'warning':
    return colors.primary.red;
  default:
    return colors.primary.blue;
  }
};

const Button = styled.button<ButtonProps>`
  height: 32px;
  padding: 0 20px;
  min-width: 120px;
  border: 0;
  color: #fff;
  background: ${props => setColor(props.appearance = 'default', props.theme.colors)};
  cursor: pointer;
  border-radius: 2px;
`;

Button.defaultProps = {
  appearance: 'default',
};
export default Button;
