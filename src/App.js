import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import NotFound from './components/NotFound';
import QuizSelection from './routes/QuizSelection';
import Home from './routes/Home';
import QuizApp from './routes/QuizApp';
import { useEffect, useState } from 'react';
import SideModal from './components/SideModal';
import { SideContext } from './helpers/Contexts';
import Communities from './routes/Communities';
import Logsheet from './routes/Logsheet';
import About from './routes/About';
import Contact from './routes/Contact';
import $ from 'jquery';
import CommunityAnswers from './routes/CommunityAnswers';
import Essay from './components/Essay';
import Login from './components/auth/login';
function App() {
  const TRACKING_ID = 'G-RW3DCXL7PN';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: 'pageview', page: '/' });

  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(() => {
    if ($(window).width() < 768) return false;
    return true;
  });

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
            <Route path="/login/" element={<Login year="2016" />}></Route>
            <Route path="/comments/" element={<CommunityAnswers />}></Route>
            <Route path="/2016/" element={<QuizApp year="2016" />}></Route>
            <Route
              path="/2016/paper-2/"
              element={<Essay year="2016" />}
            ></Route>
            <Route path="/2017/" element={<QuizApp year="2017" />}></Route>
            <Route
              path="/2017/paper-2/"
              element={<Essay year="2017" />}
            ></Route>
            <Route path="/2018/" element={<QuizApp year="2018" />}></Route>
            <Route
              path="/2018/paper-2/"
              element={<Essay year="2018" />}
            ></Route>
            <Route path="/2019/" element={<QuizApp year="2019" />}></Route>
            <Route
              path="/2019/paper-2/"
              element={<Essay year="2019" />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
