import styled from 'styled-components';

const SLayout = styled.div<{ $isPC: boolean }>`
  position: relative;
  max-width: ${(props) => (props.$isPC ? '768px' : '430px')};
  min-width: 375px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  background-color: var(--bg);
  overflow: auto;
`;

export default SLayout;
