import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Components
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Courses from './Components/Courses/Courses';
import Student from './Components/Student/Student';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
