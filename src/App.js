import './App.css';
import Home from './components/Home';
import Package from './components/Package';
import Review from './components/Review';
import Ease from './components/Ease';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
     <Home />
     <Review />
     <Package />
     <Ease />
     <Question />
    </div>
  );
}

export default App;
