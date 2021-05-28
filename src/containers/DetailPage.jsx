import React from 'react';
import { useOneCharacter } from '../hooks/hooks';



const DetailPage = () => {
  const { oneCharacter, loading } = useOneCharacter();

  
  return (
    <div>
      {
        loading
          ?
          <h2>Loading...</h2>
          :
          <div >
            <img src={oneCharacter.photoUrl} alt={name}/>
            <h2>{oneCharacter.name}</h2>
          </div>
      }
    </div>
  );
    
};

export default DetailPage;
