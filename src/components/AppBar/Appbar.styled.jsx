import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  height: 60px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: rgb(34, 193, 195);
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 1) 0%,
    rgba(32, 164, 64, 0.7847514005602241) 49%,
    rgba(32, 162, 56, 1) 100%
  );
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
