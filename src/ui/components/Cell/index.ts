import styled from 'src/ui/styled';

interface CellProps {
  w: number
  centered: boolean
}

export default styled.div<CellProps>`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  height: 100%;
  width: ${props => props.w}px;
  justify-content: ${props => props.centered ? 'center' : 'flex-start'};
  text-overflow: ellipsis;
`;
