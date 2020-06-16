import styled from 'src/ui/styled';

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.secondary.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
