import React from 'react';
import cn from 'classnames'

import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className={cn('Header mb-70')}>
      <nav className={'container-main'}>
        <ul>
          <li>
            <Link to="/">Lections</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
