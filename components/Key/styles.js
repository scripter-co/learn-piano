import styled, { css } from 'styled-components'

const Key = styled.button`
  width: 40px;
  height: 140px;
  display: inline-block;
  border-left: 1px solid #666;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 1px 1px 7px #ccc;
  font-size: 9pt;
  font-weight: bold;
  text-align: center;
  user-select: none;
  z-index: 1;
  cursor: pointer;

  ${({ type }) => type === "black" && css`
    position: absolute;
    width: 30px;
    height: 75px;
    margin-left: -15px;
    z-index: 2;
    background: #333;
    color: #fff;
  `}

  &:last-child {
    border-right: 1px solid #666;
  }

  ${({ mouseDown, type }) =>
      (mouseDown && type === "white" && css`
        background: linear-gradient(to bottom, #fff 1%, #f1f1f1 100%);
      `)
    ||
      (mouseDown && type === "black" && css`
        background: linear-gradient(to bottom, #333 1%, #000 100%);
      `
    )
  }
`;

const Note = styled.span`
  display: block;
`;

export {
  Key,
  Note
}
