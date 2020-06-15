import styled from 'src/ui/styled';

export default styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.colors.primary.blue};
  & > div {
    margin-right: 10px;
  }
`;
