import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';

import TopBar from '../components/TopBar/TopBar';
import { fetchProductsAction } from '../redux/actions';
import { GeneralContainer, Container } from './general.styled'

const Search = () => {

  const dispatch = useDispatch();
  const searchFunction = (query) => dispatch(fetchProductsAction(query));

  const { items, error, categories, author } = useSelector(state => state);

  const products = useMemo(() =>
    items.map((item) => <ProductCard key={item.id} {...item} />)
  , [items])

  return (
    <GeneralContainer>
      <TopBar searchFunction={searchFunction} />
      <Container>{products}</Container>
    </GeneralContainer>
  );

}


export default Search;