import PropTypes from 'prop-types';

import {
  Button,
  DetailContainer,
  PictureContainer,
  FreeShippingIcon,
  ProductCardContainer,
  DescriptionContainer,
} from './ProductDetail.styled';

const ProductDetail = ({
  id,
  title,
  price,
  picture,
  condition,
  description,
  free_shipping,
}) => {
  return (
    <ProductCardContainer>
      <PictureContainer md={8} xs={12}>
        <img
          src={picture}
          className='product-picture'
        />
      </PictureContainer>
      <DetailContainer md={4} xs={12}>
        {free_shipping && <FreeShippingIcon />}
        <div className='title'>{title}</div>
        <div className='price'>{price?.currency} {price?.amount}</div>
        <Button>Comprar Ahora</Button>
      </DetailContainer>
      <DescriptionContainer xs={12}>
        <div className='title'>Descripción del Producto</div>
        <div>{description}</div>
      </DescriptionContainer>
    </ProductCardContainer>
  );
};

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool,
  description: PropTypes.string
};

ProductDetail.defaultProps = {
  description: null,
};

export default ProductDetail;