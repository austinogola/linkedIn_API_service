import './App.css';
import Home from './pages/home';
import Docs from './pages/docs';
import Index from './pages/index';
import Usage from './pages/usage';
import Keys from './pages/keys';
import Settings from './pages/settings';

// import Index from './components/app/Index';
import Register from './components/app/Register';
import Login from './components/app/Login';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/docs" element={<Docs />}/>
      <Route path='app' element={<Index />}/>
          <Route path='app/login' element={<Login />} /> {/*A nested route!*/}
          <Route path='app/register' element={<Register />} /> {/*A nested route!*/}
          <Route path='app/keys' element={<Keys />} /> {/*A nested route!*/}
          <Route path='app/usage' element={<Usage />} /> {/*A nested route!*/}
          <Route path='app/settings' element={<Settings />} /> {/*A nested route!*/}
     
    </Routes>
  );
}

export default App;
