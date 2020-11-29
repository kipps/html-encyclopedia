import React from 'react';
import { 
  BrowserRouter as Router,
  Link,
  useRouteMatch
 } from 'react-router-dom';
import data from '../api/content';
import CustomLink from '../components/custom-link/CustomLink';

// import SlideConainer from '../components/slides/slide-container';
// import Slide from '../components/slides/slide';


const Lection = ({ match }) => {  
  const { params: { lectionId } } = match;
  const lection = data[lectionId - 1];
  let { path, url } = useRouteMatch();

  return (
    <>
      <header>
        <h2>
            {lection.title}
        </h2>
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

