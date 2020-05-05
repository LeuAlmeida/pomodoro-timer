import styled from "styled-components";

export const Button = styled.button.attrs({
  type: "button",
})`
  display: flex;
  margin-top: 80px;

  border-radius: 8px;
  width: 55px;
  height: 55px;

  box-shadow: inset 1px 2px #ffffff0a, -4px -4px 20px -5px #ffffff59, 2px 2px 20px #000000b5;
`;
