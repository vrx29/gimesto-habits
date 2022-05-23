import styled from "styled-components";
import { css } from "styled-components";

export const Button = styled.button`
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: var(--COLOR-PRIMARY);
          &:hover {
            background-color: var(--COLOR-PRIMARY-HOVER);
          }
        `;
      default:
        return css`
          background-color: var(--COLOR-GRAY-800);
          &:hover {
            background-color: var(--COLOR-GRAY-700);
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
  color: var(--COLOR-LIGHT);
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
