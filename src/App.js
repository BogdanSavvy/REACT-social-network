import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import UserProfile from './components/UserProfile/UserProfile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Groups from './components/Groups/Groups';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import "./scss/null.scss"
import './App.css';

import { Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path='/home/' Component={Home} />
          <Route path='/profile/*' element={<UserProfile profData={props.state.profileP} addPost={props.addPost} />} />
          <Route path='/messages/*' element={<Messages mesgData={props.state.messagesP} sendMessage={props.sendMessage} />} />
          <Route path='/news' Component={News} />
          <Route path='/music' Component={NotFoundPage} />
          <Route path='/groups' Component={NotFoundPage} />
          <Route path='/friends' Component={NotFoundPage} />
          <Route path='/settings' Component={NotFoundPage} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
