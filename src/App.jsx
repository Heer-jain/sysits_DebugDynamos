
import DailyPuzzle from './components/DailyPuzzle'
import DailyShopping from './components/DailyShopping'
import FashionShow from './components/FashionShow'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Puzzle from './components/Puzzle';
import Shopping from './components/Shopping';
import Show from './components/Show';

const App = () => {

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DailyPuzzle" element={<DailyPuzzle />} />
        <Route path="/DailyShopping" element={<DailyShopping />} />
        <Route path="/FashionShow" element={<FashionShow />} />
        <Route path="/Puzzle" element={<Puzzle />} />
        <Route path="/Shopping" element={<Shopping day={1}/>} />
        <Route path="/Show" element={<Show />} />
      </Routes>
    </Router>
    // <Puzzle/>
    // <Task2/>
    // <Shopping/>
    // <Show/>
  )

}

export default App
