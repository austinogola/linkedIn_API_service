import './App.css';
import Home from './pages/home';
import Index from './components/app/Index';
import Register from './components/app/Register';
import Login from './components/app/Login';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='app' element={<Index />}/>
          <Route path='app/login' element={<Login />} /> {/*A nested route!*/}
          <Route path='app/register' element={<Register />} /> {/*A nested route!*/}
     
    </Routes>
  );
}

export default App;
