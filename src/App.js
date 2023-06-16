import './App.css';
import Home from './components/Home';
import Package from './components/Package';
import Review from './components/Review';
import Ease from './components/Ease';
import Question from './components/Question';
import Slide from './components/Slide';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
    <Slide />
    <Banner />
     <Home />
     <Review />
     <Package />
     <Ease />
     <Question />

    </div>
  );
}

export default App;
