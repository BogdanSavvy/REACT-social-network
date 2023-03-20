import Body from './components/Body/Body';
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
        <Body />
      </div>
    </div>
  );
}

export default App;
