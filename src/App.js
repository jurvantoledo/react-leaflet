import './App.css';
import ComingSoonPage from './pages/ComingSoonPage';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import TestPage from './pages/Test';

function App() {  

  return (
    <div className="App">
        <Routes>
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path="/" element={<ComingSoonPage />} />
          <Route exact path="/test" element={<TestPage />} />            
        </Routes>
    </div>
  );
}

export default App;
