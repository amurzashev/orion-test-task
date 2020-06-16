import styled from 'src/ui/styled';
import { space, SpaceProps, layout, LayoutProps, flexbox, FlexboxProps } from 'styled-system';

export default styled.div<SpaceProps & LayoutProps & FlexboxProps>`
  box-sizing: border-box;
  ${space}
  ${layout}
  ${flexbox}
`;
