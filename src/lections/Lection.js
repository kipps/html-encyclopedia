import React from 'react';
import { 
  BrowserRouter as Router,
  Link,
  useRouteMatch
 } from 'react-router-dom';
import data from '../api/content';
import CustomLink from '../components/custom-link/CustomLink';

import './Lection.scss';

const Lection = ({ match }) => {  
  const { params: { lectionId } } = match;
  const lection = data[lectionId - 1];
  let { path, url } = useRouteMatch();

  return (
    <>
      <header className={'Lection__title'}>
        <h5>
          <span>{lection.title}</span>
        </h5>
      </header>

      {lection.content.map((slide, index) => (
        <div key={index}>
          <CustomLink 
            activeOnlyWhenExact={true}
            label={slide.title}
            to={`${url}/slide/${index + 1}/`}>{slide.title}</CustomLink>
        </div>
      ))}
    </>
  )
};

export default Lection;

