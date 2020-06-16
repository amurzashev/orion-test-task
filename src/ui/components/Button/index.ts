import styled from 'src/ui/styled';

export default styled.button`
  height: 32px;
  padding: 0 20px;
  min-width: 120px;
  border: 0;
  color: #fff;
  background: ${props => props.theme.colors.primary.blue};
  cursor: pointer;
  border-radius: 2px;
`;
