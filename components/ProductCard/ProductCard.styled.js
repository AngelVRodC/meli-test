
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';

export const ProductCardContainer = styled(Row)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  min-height: 180px;
  padding: 20px 0px;
`;

export const PictureContainer = styled(Col)`
  img.product-picture {
    cursor: pointer;
    width: 160px;
    height: auto;
  }
`;

export const DescriptionContainer = styled(Col)`
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

export const StatusContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center; 

`;