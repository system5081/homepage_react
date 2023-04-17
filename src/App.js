import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage />  } />
        <Route path='/blog' element={ <BlogPage />  } />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
