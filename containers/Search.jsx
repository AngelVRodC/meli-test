import { useDispatch, useSelector } from 'react-redux';

import TopBar from '../components/TopBar/TopBar';
import { fetchProductsAction } from '../redux/actions';
import { GeneralContainer, Container } from './general.styled'

const Search = () => {

  const dispatch = useDispatch();
  const searchFunction = (query) => dispatch(fetchProductsAction(query));

  const error = useSelector(state => state.error);
  const products = useSelector(state => state.products);
  return (
    <GeneralContainer>
      <TopBar searchFunction={searchFunction} />
      <Container>{JSON.stringify(products)}</Container>
    </GeneralContainer>
  );

}


export default Search;