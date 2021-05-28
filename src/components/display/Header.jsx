import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
      <h1>
                Avatar Characters
      </h1>
      <div>
        <Link to={'/'}>home</Link>   
      </div>
    </>
  );
}
