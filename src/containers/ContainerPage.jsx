import React from 'react';
import { useCharacterHook } from '../hooks/hooks';
import CharacterList from '../components/display/CharacterList';

const ContainerPage = () => {

  const { loading, characters } = useCharacterHook();
 
  if(loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters}/>;
   
};

export default ContainerPage; 
