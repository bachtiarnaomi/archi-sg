import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import NotFound from './components/NotFound';
import QuizSelection from './routes/QuizSelection';
import Home from './routes/Home';
import QuizApp from './routes/QuizApp';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past-year-paper/" element={<QuizSelection />}></Route>
            <Route path="/2016/" element={<QuizApp year="2016" />}></Route>
            <Route path="/2017/" element={<QuizApp year="2017" />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
