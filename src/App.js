
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Tasks } from './components/Tasks';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Todos </h1>
      
      <Routes>
        <Route exact path="/" element={<Register/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/tasks" element={<Tasks/>} />
      </Routes>
    </div>
  );
}

export default App;
