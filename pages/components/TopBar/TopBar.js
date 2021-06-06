import {
  MeliLogo,
  SearchIcon,
  SearchInput,
  SearchContainer,
  GeneralContainer,
  SearchInputContainer,
} from "./TopBar.styled";

const SearchBar = () => (
  <GeneralContainer>
    <SearchContainer>
      <MeliLogo />
      <SearchInputContainer>
        <SearchInput
          className='search-input'
          placeholder='Nunca dejes de Buscar'
        />
        <SearchIcon />

      </SearchInputContainer>
    </SearchContainer>
  </GeneralContainer>
);

export default SearchBar;