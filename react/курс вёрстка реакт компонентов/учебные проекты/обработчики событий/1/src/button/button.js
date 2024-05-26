import styled from "styled-components";
import { Button as ElementButton } from "/src/elements";

const buttonOptions = {
  large: {
    height: "40px",
    padding: "40px",
    fontSize: "24px",
    radius: "10px"
  },
  medium: {
    height: "30px",
    padding: "30px",
    fontSize: "18px",
    radius: "5px"
  },
  small: {
    height: "20px",
    padding: "8px",
    fontSize: "16px",
    radius: "3px"
  }
};

const Button = styled(ElementButton)`
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: yellow;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 03s;
  ${(props) => {
    const theme = buttonOptions[props.size || "medium"];

    return `
      height: ${theme.height};
      padding-left: ${theme.padding};
      padding-right: ${theme.padding};
      font-size: ${theme.fontSize};
      border-radius: ${theme.radius};
    `;
  }}

  &:active,
  &:hover {
    background-color: orange;
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }
`;

export default Button;
