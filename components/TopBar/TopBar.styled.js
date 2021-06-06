import styled from 'styled-components';

export const GeneralContainer = styled.div`
  width: auto;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 5px 0px;
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInputContainer = styled.div`
  width: 400px;
  height: 30px;
  margin: 0 15px;
  display: flex;
`;

export const SearchInput = styled.input`
  margin: 0;
  padding: 0 5px;
  width: 350px;
  border: 0px;
  height: 30px;
  &:focus {
    outline: none;
  }
`;


export const MeliLogo = styled.div`
  width: 30px;
  height: 20px;
  background-image: url(${({ theme }) => theme.assets.meliLogo});
  background-size: cover;
`;

export const SearchIcon = styled.button`
  border: 0px;
  margin: 0;
  padding: 0px;
  background-color:  ${({ theme }) => theme.colors.secondary};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-image: url(${({ theme }) => theme.assets.searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
`;
