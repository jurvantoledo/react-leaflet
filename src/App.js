import './App.css';
import ComingSoonPage from './pages/ComingSoonPage';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {  

  return (
    <div className="App">
        <Routes>
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path="/" element={<ComingSoonPage />} />      
        </Routes>
    </div>
  );
}

export default App;
