import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/AvatarApi';


const useCharacterHook = () => { 
  const [loading, setLoading] = useState(true);
  const [characters, setCharacter] = useState([]);
  
  useEffect(() => { 
    fetchCharacters()
      .then(characters => { 
        setCharacter(characters);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, characters };
};
  
export default useCharacterHook;
