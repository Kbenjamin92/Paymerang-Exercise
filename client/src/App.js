import './App.css';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
