import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/AvatarApi';


const DetailPage = (props) => {

  const [oneCharacter, setOneCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    fetchCharacters(props.match.params.id)
      .then(avatar => { 
        setOneCharacter(avatar);
      })
      .finally(() => setLoading(false));
  }, []);
  
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
