import styled, { css } from "styled-components";

const Staff = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid #000;
`;

const Line = styled.div`
  height: 25%;
  border-bottom: 1px solid #000;

  ${({ filled }) => filled && css`
    &:before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background: #000;
    }
  `}
`;

export default () => {
  return (
    <Staff>
      <Line />
      <Line />
      <Line />
      <Line />
    </Staff>
  );
};
