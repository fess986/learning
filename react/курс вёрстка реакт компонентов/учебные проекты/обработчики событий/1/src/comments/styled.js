import styled from "styled-components";
import { Li, P } from "/src/elements";
import Title from "/src/title/title";
import Button from "/src/button/button";

export const CoomentsTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const CoomentsLi = styled(Li)`
  margin-bottom: 10px;
`;

export const CoomentsButton = styled(Button)`
  margin-top: 20px;
`;

export const Name = styled.span`
  display: block;
  font-weight: bold;
  font-size: 18px;
  color: #888;
  margin-bottom: 5px;
`;

export const Text = styled(P)`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;
