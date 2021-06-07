
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';

export const ProductCardContainer = styled(Row)`
  padding: 30px;
`;

export const PictureContainer = styled(Col)`
  img.product-picture {
    width: 100%;
    height: auto;
  }
`;

export const DetailContainer = styled(Col)`
  display: block;
  font-family: Helvetica;
  .title {
    font-weight: bold;
  }
  .price {
    margin: 10px 0px;
  }
`;

export const FreeShippingIcon= styled.div`
  background-image: url(${({ theme }) => theme.assets.freeShippingIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  width: 30px;
  height: 30px;
`;

export const DescriptionContainer = styled(Col)`
  display: block;
  .title {
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
  }
`;

export const Button = styled.div`
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.blue};
  color: #fff;
  width: 248px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: auto;
  cursor: pointer;
`;