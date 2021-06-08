import Link from 'next/link';
import PropTypes from 'prop-types';

import {
  StatusContainer,
  PictureContainer,
  FreeShippingIcon,
  ProductCardContainer,
  DescriptionContainer
} from './ProductCard.styled';

const ProductCard = ({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping,
}) => {
  return (
    <ProductCardContainer>
      <PictureContainer md={2} xs={12}>
        <Link href={`/items/${id}`}>
          <img
            src={picture}
            className='product-picture'
          />
        </Link>
      </PictureContainer>
      <DescriptionContainer md={8} xs={12}>
        {free_shipping && <FreeShippingIcon />}
        <div className='price'>{price.currency} {price.amount}</div>
        <div className='title'>{title}</div>
      </DescriptionContainer>
      <StatusContainer md={2} xs={12}>
        <div>Condicion: {condition}</div>
      </StatusContainer>
    </ProductCardContainer>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool,
};

ProductCard.defaultProps = {
  free_shipping: null
};

export default ProductCard;
