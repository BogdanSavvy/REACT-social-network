import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import UserProfile from './components/UserProfile/UserProfile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import "./scss/null.scss"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="main-container">
          <Routes>
            <Route path='/profile' Component={ UserProfile } />
            <Route path='/messages' Component={ Messages } />
            <Route path='/news' Component={ News } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
