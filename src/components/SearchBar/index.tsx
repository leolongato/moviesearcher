import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Keyboard, TextInput } from 'react-native';
import { Container, UserInput, CancelButton, SearchContainer } from './styles';

import * as Animatable from 'react-native-animatable';
const CancelBtn = Animatable.createAnimatableComponent(CancelButton);

const SearchBar: React.FC = () => {
  const [searching, setSearching] = useState<boolean>(false);
  const userIputRef = useRef<TextInput>(null)

  function handleUserTouchInputText(){
    userIputRef.current?.focus();
    setSearching(true)
  }

  return (
    <>
      <Container>
        <SearchContainer onTouchStart={handleUserTouchInputText} isSearching={searching}>
            <Icon name="search" size={18} color="#EAE8FF" style={{ position: 'relative'}}/>
            <UserInput ref={userIputRef} placeholder="Buscar" placeholderTextColor="#EAE8FF"/>
        </SearchContainer>
        {
          searching ? <CancelBtn animation="fadeInRight" duration={50} onPress={() => {setSearching(false), Keyboard.dismiss()}}>Cancelar</CancelBtn> : <></>
        }
      </Container>
    </>
  );
}

export default SearchBar;