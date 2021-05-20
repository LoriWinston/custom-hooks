import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/AvatarApi';


const CharacterHook = () => { 
  const [loading, setLoading] = useState(true);
  const [avatar, setCharacter] = useState([]);
  
  useEffect(() => { 
    fetchCharacters()
      .then(characters => { 
        setCharacter(characters);
      })
      .finally(() => setLoading(false));
  }, []);
    
  return { loading, avatar };
};
  
export default CharacterHook;
  

// export const useCharacters = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchCharacters().then((events) => setEvents(events));
//   }, []);

//   return events;
// };
