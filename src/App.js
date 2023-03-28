import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />

        <div className="content">
          <Routes>
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
