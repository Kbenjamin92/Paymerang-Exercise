import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation.jsx';
import Header from './components/header.jsx';
import Main from './components/main.jsx';


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
