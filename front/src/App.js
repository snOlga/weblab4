import LogPass from './LogPasField';
import Main from './Main';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <LogPass/> } />
          <Route path="/main" element={ <Main /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;