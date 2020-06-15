import styled from 'src/ui/styled';

interface HeaderCellProps {
  w: number
}

export default styled.div<HeaderCellProps>`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  height: 100%;
  color: ${props => props.theme.colors.secondary.white};
  width: ${props => props.w}px;
  justify-content: flex-start;
`;
