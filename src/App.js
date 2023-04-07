import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import NotFound from './components/NotFound';
import QuizSelection from './routes/QuizSelection';
import Home from './routes/Home';
import QuizApp from './routes/QuizApp';
import { useState } from 'react';
import SideModal from './components/SideModal';
import { SideContext } from './helpers/Contexts';
import Communities from './routes/Communities';
import Logsheet from './routes/Logsheet';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  return (
    <Router>
      <div className="App">
        <SideContext.Provider
          value={{
            modal,
            setModal,
            sidebar,
            setSidebar,
          }}
        >
          <Navbar />
        </SideContext.Provider>
        <div className="content">
          <SideContext.Provider
            value={{
              modal,
              setModal,
              sidebar,
              setSidebar,
            }}
          >
            <Sidebar />
            <SideModal />
          </SideContext.Provider>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/" element={<About />}></Route>
            <Route path="/contact/" element={<Contact />}></Route>
            <Route path="/past-year-paper/" element={<QuizSelection />}></Route>
            <Route path="/communities/" element={<Communities />}></Route>
            <Route path="/logsheet/" element={<Logsheet />}></Route>
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
