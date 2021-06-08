
import { useState } from 'react';
import PropTypes from 'prop-types';

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
          <SearchIcon className='search' onClick={() => onClick(searchValue)} />
        </SearchInputContainer>
      </SearchContainer>
    </GeneralContainer>
  );
};


TopBar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default TopBar;