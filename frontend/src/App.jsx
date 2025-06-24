import './App.css';
import Create from './Components/Create';
import Home from './Components/Home';
import Completed from './Components/Completed';
import Pending from './Components/pending';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import { useEffect, useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  const [Name,setName]=useState('');
  useEffect(() => {
    localStorage.getItem('email') ? setLogin(true) : setLogin(false);
    const UserName=localStorage.getItem('Name');
    if(UserName){
      setName(UserName)
    }
  },[])
  return (
    
    <BrowserRouter>
    {
      login ? <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className='text-2xl font-bold'>
            Welcome {Name}🎉🎉
          </h2>
          <h2 className="text-2xl font-bold mx-auto absolute left-1/2 transform -translate-x-1/2">
            Mini Task Manager App
          </h2>
          <div className="flex gap-4 ml-auto">
            <Link to="/" className="text-blue-600 hover:underline ">All Tasks</Link>
            <Link to="/pending" className="text-blue-600 hover:underline">Pending Tasks</Link>
            <Link to="/completed" className="text-blue-600 hover:underline">Completed Tasks</Link>
          </div>
        </div>

        <Create />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </div>:(<Login/>
    
      
      )}
    </BrowserRouter>
  );
}

export default App;
