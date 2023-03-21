import UserProfile from './components/UserProfile/UserProfile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import "./scss/null.scss"
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className="main__container">
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
