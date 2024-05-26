import styled from "styled-components";
import { P } from "/src/elements";
import Button from "/src/button/button";
import Counter from "/src/counter/counter";
import FullPrice from "/src/full-price/full-price";

const valueStyle = `
  display: inline-flex;
  margin-left: 20px;
  color: #333;
`;

export const StyledProductPage = styled.article`
  margin: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Arial, "Helvetica", sans-serif';
  font-size: 16px;
  color: #333;
`;

export const Header = styled.header`
  margin-bottom: 20px;
`;

export const ProductWrapper = styled.section`
  display: flex;
  margin-bottom: 20px;
`;

export const ProductInfo = styled.div`
  margin-left: 20px;
  border-left: 1px solid #888;
  box-sizing: border-box;
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const ProductInfoLine = styled(P)`
  color: #666;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const PageCounter = styled(Counter)`
  ${valueStyle}
`;

export const PageFullPrice = styled(FullPrice)`
  ${valueStyle}
`;

export const DeliveryValue = styled.span`
  ${valueStyle}
  color: green;
`;

export const BuyButton = styled(Button)`
  margin-top: 40px;
`;
