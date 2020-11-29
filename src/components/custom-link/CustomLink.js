import React from 'react';
import cn from 'classnames'
import {
  Link,
  useRouteMatch
} from "react-router-dom";

import './CustomLink.scss';

const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  console.log(match);

  return (
    <div className={cn('CustomLink', {"--active":match})}>
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default CustomLink;
