import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import Main from './components/Main.js';


const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main />
    </div>
  );
}

export default App;
