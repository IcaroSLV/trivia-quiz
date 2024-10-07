import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Questions from './Pages/QuestionsPage';
import Home from './Pages/Home';

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Questions' element={<Questions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
