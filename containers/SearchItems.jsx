import { useRouter } from 'next/router'
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';

import TopBar from '../components/TopBar/TopBar';
import { fetchProductsAction } from '../redux/actions';
import { GeneralContainer, Container } from './general.styled'

const SearchItems = ({ query }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchFunction = (value) => router.push({
    pathname: '/items',
    query: { search: value },
  });

  useEffect(() => {
    if (query) {
      dispatch(fetchProductsAction(query))
    }
  }, [query]);

  const { items, error, categories, author } = useSelector(state => state);

  const products = useMemo(() =>
    items.map((item) => <ProductCard key={item.id} {...item} />)
    , [items]);

  return (
    <GeneralContainer>
      <TopBar onClick={searchFunction} />
      <Container>{products}</Container>
    </GeneralContainer>
  );

}

export default SearchItems;