
import { useState } from 'react';

import {
  MeliLogo,
  SearchIcon,
  SearchInput,
  SearchContainer,
  GeneralContainer,
  SearchInputContainer,
} from "./TopBar.styled";

const TopBar = ({ searchFunction }) => {

  const [query, setQuery] = useState('apple');

  return (
    <GeneralContainer>
      <SearchContainer>
        <MeliLogo />
        <SearchInputContainer>
          <SearchInput
            type="text"
            value={query}
            className='search-input'
            placeholder='Nunca dejes de Buscar'
            onChange={event => setQuery(event.target.value)}
          />
          <SearchIcon onClick={()=> searchFunction(query)} />

        </SearchInputContainer>
      </SearchContainer>
    </GeneralContainer>
  );
}
export default TopBar;