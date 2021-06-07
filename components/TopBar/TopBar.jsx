
import { useState, useEffect } from 'react';

import {
  MeliLogo,
  SearchIcon,
  SearchInput,
  SearchContainer,
  GeneralContainer,
  SearchInputContainer,
} from "./TopBar.styled";

const TopBar = ({ onClick }) => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <GeneralContainer>
      <SearchContainer>
        <MeliLogo />
        <SearchInputContainer>
          <SearchInput
            type="text"
            value={searchValue}
            className='search-input'
            placeholder='Nunca dejes de Buscar'
            onChange={event => setSearchValue(event.target.value)}
          />
          <SearchIcon onClick={()=> onClick(searchValue)} />
        </SearchInputContainer>
      </SearchContainer>
    </GeneralContainer>
  );
}
export default TopBar;