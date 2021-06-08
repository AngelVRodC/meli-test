import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TopBar from '../components/TopBar/TopBar';
import { fetchDataAction } from '../redux/actions';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ProductCard from '../components/ProductCard/ProductCard';
import { GeneralContainer, Container, ErrorContainer } from './general.styled'

const SearchItemsContainer = ({ query }) => {

  const router = useRouter();
  const dispatch = useDispatch();

  // Redirect with query param
  const redirectFunction = (value) => router.push({
    pathname: '/items',
    query: { search: value },
  });

  useEffect(() => {
    if (query) {
      // Fetch items data with query params
      dispatch(fetchDataAction(query))
    }
  }, [query]);

  const { items, error, categories } = useSelector(state => state);

  // we need to update the product list only when there are new products
  const products = useMemo(() =>
    items?.map((item) => <ProductCard key={item.id} {...item} />)
    , [items]);

  return (
    <GeneralContainer>
      <TopBar onClick={redirectFunction} />
      <Breadcrumb
        categories={categories}
        onClick={redirectFunction}
      />
      <Container>
        {products}
        {error && <ErrorContainer> {error} </ErrorContainer>}
      </Container>
    </GeneralContainer>
  );

};

SearchItemsContainer.propTypes = {
  query: PropTypes.string
};

SearchItemsContainer.defaultProps = {
  query: null
};

export default SearchItemsContainer;