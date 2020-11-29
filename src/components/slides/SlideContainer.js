import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../api/content';

const SlideConainer = () => {
  return (
    <>
      {data.map((slide, index) => (
        <div key={index}>
          <Link to={`/slide/${index + 1}`}>{slide.title}</Link>
        </div>
      ))}
    </>
  );
};

export default SlideConainer;