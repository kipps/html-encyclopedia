import React from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";

const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  console.log(match);

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default CustomLink;
