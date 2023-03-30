import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import UserProfile from './components/UserProfile/UserProfile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Groups from './components/Groups/Groups';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';

import "./scss/null.scss"
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="main-container">
          <Routes>
            <Route path='/profile/*' Component = { UserProfile } />
            <Route path='/messages/*' Component = { Messages } />
            <Route path='/news' Component = { News } />
            <Route path='/music' Component = { Music } />
            <Route path='/groups' Component = { Groups } />
            <Route path='/friends' Component = { Friends } />
            <Route path='/settings' Component = { Settings } />
          </Routes>
        </div>
      </div>
  );
}


export default App;
