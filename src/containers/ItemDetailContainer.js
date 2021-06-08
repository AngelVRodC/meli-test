import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import TopBar from '../components/TopBar/TopBar';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { GeneralContainer, Container, ErrorContainer } from './general.styled';

const ItemDetailContainer = ({ product, categories, error }) => {

  const router = useRouter();

  // Redirect with query param
  const redirectFunction = (value) => router.push({
    pathname: '/items',
    query: { search: value },
  });


  return (
    <GeneralContainer>
      <TopBar onClick={redirectFunction} />
      <Breadcrumb
        categories={categories}
        onClick={redirectFunction}
      />
      <Container>
        {product && <ProductDetail {...product} />}
        {error && <ErrorContainer> {error} </ErrorContainer>}
      </Container>
    </GeneralContainer>
  );

}

ItemDetailContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
  }),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.string
};

ItemDetailContainer.defaultProps = {
  categories: [],
  error: null
};

export default ItemDetailContainer;