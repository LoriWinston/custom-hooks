import { useEffect, useState } from 'react';
import { fetchCharacters, getOneAvatar } from '../services/AvatarApi';
import { useParams } from 'react-router-dom';


export const useCharacterHook = () => { 
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

export const useOneCharacter = () => {
  const [loading, setLoading] = useState(true);
  const [oneCharacter, setOneCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneAvatar(id)
      .then(oneCharacter => {
        setOneCharacter(oneCharacter);
      })
      .finally(() => setLoading(false));
  }, []);

  return { oneCharacter, loading };
};

