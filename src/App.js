import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Questions from './Pages/QuestionsPage';
import Home from './Pages/Home';
import Results from './Pages/Results'

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Questions' element={<Questions/>}/>
        <Route exact path='/Results' element={<Results/>}/>
      </Routes>
    </Router>
  );
}

export default App;
