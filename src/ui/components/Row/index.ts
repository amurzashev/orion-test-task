import styled from 'src/ui/styled';

interface RowProps {
  even: boolean,
}

export default styled.div<RowProps>`
& > div {
    margin-right: 10px;
  }
  display: flex;
  width: 100%;
  flex-direction: row;
  background: ${props => props.even ? props.theme.colors.secondary.white : props.theme.colors.secondary.highlight};
`;
