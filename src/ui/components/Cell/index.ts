import styled from 'src/ui/styled';

interface CellProps {
  w: number
  centered: boolean
  fillColor?: number | undefined
}

export default styled.div<CellProps>`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  height: 100%;
  width: ${props => props.w}px;
  justify-content: ${props => props.centered ? 'center' : 'flex-start'};
  text-overflow: ellipsis;
  ${props => props.fillColor && `
    background: ${props.fillColor > 3000 ? props.theme.colors.primary.red : props.fillColor > 2000 ? props.theme.colors.primary.yellow : 'transparent'};
  `}
`;
