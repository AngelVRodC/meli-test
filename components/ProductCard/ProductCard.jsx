import { ProductCardContainer, PictureContainer, DescriptionContainer, StatusContainer, FreeShippingIcon } from './ProductCard.styled';

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
        <img
          src={picture}
          className='product-picture'
        />
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
