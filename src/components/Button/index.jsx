import styled from "styled-components";
import { css } from "styled-components";

export const Button = styled.button`
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: #3554d1;
          &:hover {
            background-color: #2e4dca;
          }
        `;
      default:
        return css`
          background-color: #03071e;
          &:hover {
            background-color: #171717;
          }
        `;
    }
  }};
  ${({ width }) =>
    width === "full" &&
    css`
      width: 100%;
    `}
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
