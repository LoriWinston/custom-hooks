import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map((character) => (
      <li key={character.id}>
        <Link to={`/details/${character.id}`}>
          <Character {...character} />
        </Link>
      </li>
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  )
};

export default CharacterList;

// const CharacterList = ({ characters, loading }) => {
 
//   return (
//     <div>
//       {
//         loading
//           ?
//           <h2>Loading...</h2>
//           :
//           <ul  aria-label="characters">
//             {characters.map(character => 
//               (<li key={character.id}>
//                 <Character 
//                   id={character.id}
//                   name={character.name}
//                   image={character.image}
//                 />
//               </li>) 
//             )}
//           </ul>
//       }
//     </div>
//   );
    
// };

// CharacterList.propTypes = { 
//   characters: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired
// };

// export default CharacterList;