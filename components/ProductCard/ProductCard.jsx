import Link from 'next/link'

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
        { free_shipping && <FreeShippingIcon />}
        <div className='price'>{price.currency} {price.amount}</div>
        <div className='title'>{title}</div>
      </DescriptionContainer>
      <StatusContainer md={2} xs={12}>
       
        <div>{condition}</div>
      </StatusContainer>      
    </ProductCardContainer>
  );
}

export default ProductCard;
