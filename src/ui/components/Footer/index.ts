import styled from 'src/ui/styled';

export default styled.footer`
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #000;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > *:not(:first-of-type) {
    margin-left: 10px;
  }
`;
