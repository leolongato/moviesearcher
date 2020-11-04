import styled from 'styled-components/native';

interface SearchContainerProps{
    isSearching: boolean
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
`;

export const SearchContainer = styled.View<SearchContainerProps>`
  flex: 1;
  background-color: #ADACB5;
  flex-direction: row;
  justify-content: ${props => props.isSearching ? 'flex-start' : "center"};
  align-items: center;
  text-align: center;
  padding: 0 10px;
  border-radius: 5px;

`;

export const UserInput = styled.TextInput`
  padding: 0 5px;
  color: #FFF;
`;

export const CancelButton = styled.Text`
  color: #FFF;
  font-size: 14px;
  margin-left: 10px;
`;

