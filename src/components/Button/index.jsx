import styled from "styled-components";
import { css } from "styled-components";

export const Button = styled.button`
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          border: none;
          color: var(--COLOR-LIGHT);
          background-color: var(--COLOR-PRIMARY);
          &:hover {
            background-color: var(--COLOR-PRIMARY-HOVER);
          }
        `;
      case "outline":
        return css`
          color: var(--COLOR-DARK);
          border: 1px solid var(--COLOR-GRAY-300);
          background-color: var(--COLOR-LIGHT);
          &:hover {
            background-color: var(--COLOR-GRAY-100);
          }
        `;
      default:
        return css`
          border: none;
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
  font-weight: 600;
  cursor: pointer;
`;
