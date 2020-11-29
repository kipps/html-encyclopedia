import React from 'react';
import './TagsList.scss';

import {tagsBlock, tagsInline} from '../../api/tags';

const TagsList = () => {

  return (
    <>
      <div>
        <header>
          <h4>Block Elements</h4>
        </header>

        <div>
          <ul className={'TagsList'}>

            {tagsBlock.map((el, i) => {
              if(el.closed) {
                return (
                  <li>
                    <p>{el.title}</p>
                    <p>
                      <span>&lt;{el.title.toLowerCase()}/</span>
                    </p>
                  </li>
                )
              } else {
                return (
                  <li>
                    <p>{el.title}</p>
                    <p>
                      <span>&lt;{el.title.toLowerCase()}&gt;</span> ... <span>&lt;/{el.title.toLowerCase()}&gt;</span>
                    </p>
                  </li>
                )
              }
            })}

          </ul>
        </div>
      </div>

      <div>
        <header>
          <h4>Inline Elements</h4>
        </header>

        <div>
          <ul className={'TagsList'}>
            {tagsInline.map((el, i) => {
              if(el.closed) {
                return (
                  <li>
                    <p>{el.title}</p>
                    <p>
                      <span>&lt;{el.title.toLowerCase()}/</span>
                    </p>
                  </li>
                )
              } else {
                return (
                  <li>
                    <p>{el.title}</p>
                    <p>
                      <span>&lt;{el.title.toLowerCase()}&gt;</span> ... <span>&lt;/{el.title.toLowerCase()}&gt;</span>
                    </p>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );

}


export default TagsList;
