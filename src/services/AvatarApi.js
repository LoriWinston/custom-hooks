/* eslint-disable max-len */
export const fetchCharacters = async () => {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Fire+Nation');
  const results = await res.json();
    
  return results.map(avatar => ({
    id: avatar._id,
    name: avatar.name,
    image: avatar.photoUrl || 'http://placekitten.com/200/300'
  }));
};
    
export const getOneAvatar = async (id) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}?affiliation=Fire+Nation`);
  
  const oneCharacter = await res.json();
      
  return oneCharacter;
};
  
