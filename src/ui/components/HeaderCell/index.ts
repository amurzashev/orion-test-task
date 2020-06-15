import styled from 'src/ui/styled';
import Cell from '../Cell';

interface HeaderCellProps {
  w: number
}

export default styled(Cell)<HeaderCellProps>`
  color: ${props => props.theme.colors.secondary.white};
  width: ${props => props.w}px;
`;
