import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import LectionConainer from './lections/LectionContainer';
import Lection from './lections/Lection';
import Slide from './components/slides/Slide';

import './App.scss';
import Header from "./components/layout/Header";
import TagsList from "./components/special/TagsList";

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <div className="container-main">
          <Route exact path="/" component={LectionConainer}/>
          <Route path="/lection/:lectionId" component={Lection}/>
          <Route path="/lection/:lectionId/slide/:slideId" component={Slide}/>
          <Route path="/lection/1/slide/5/" component={TagsList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
