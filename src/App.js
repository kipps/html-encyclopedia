import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import LectionConainer from './lections/lection-container';
import Lection from './lections/lection';
import Slide from './components/slides/slide';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container-main">
        <Router>
            <header>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Lections</Link>
                  </li>
                </ul>   
              </nav>
            </header>
          <Route exact path="/" component={LectionConainer} />  
          <Route path="/lection/:lectionId" component={Lection} />
          <Route path="/lection/:lectionId/slide/:slideId" component={Slide} />
        </Router>
      </div>
    </div>
  );
}

export default App;
