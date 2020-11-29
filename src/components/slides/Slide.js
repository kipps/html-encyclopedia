import React from 'react';
import TemplateComponent from 'react-mustache-template-component';
import { Link } from 'react-router-dom';
import cn from 'classnames'
import data from '../../api/content';

import './Slide.scss';

const getList = (list) => {
  return (
    <ul>
      {list.map( (e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  )
}

const getImage = (image, alt, size) => {
  const renderImage = `<img class="--${size}" src="{{url}}" alt="${alt}"/>`;
  const url = { url: image };
  return (
      <TemplateComponent className="Slide__image mb-70" template={renderImage} data={url} />
  )
}

const getDescription = (description) => {
  const renderDescription = description;
  return (
    <TemplateComponent className="Slide__description mb-70" template={renderDescription} />
  )
}

const Slide = ({ match }) => {  
  const { params: { slideId, lectionId } } = match;
  const slide = data[lectionId - 1].content[slideId - 1];
  
  return (
    <>
      <header>
        <h2>
            {slide && slide.title}
        </h2>
      </header>
      <section className={cn("Slide__content", {'--one-column':  slide.image && slide.image.horizontal})}>
        {slide.image && getImage(slide.image.path, slide.image.alt, slide.image.size)}
        <div className="Slide__text">
          {slide.description && getDescription(slide.description)}
          {slide.list && getList(slide.list)}
        </div>
      </section>
      <footer className="Slide__footer">
          <Link to={`/lection/${lectionId}/slide/${+slideId - 1}/`}>Back</Link>
          <Link to={`/lection/${lectionId}/slide/${+slideId + 1}/`}>Next</Link>
      </footer>
    </>
  )
};

export default Slide;
