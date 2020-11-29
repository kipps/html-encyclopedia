import React from 'react';
import { Link } from 'react-router-dom';
import data from '../api/content';

const LectionConainer = () => {
  return (
    <>
      {data.map((lection, index) => (
        <div key={index}>
          <Link to={`/lection/${index + 1}`}>{lection.title}</Link>
        </div>
      ))}
    </>
  );
};

export default LectionConainer;