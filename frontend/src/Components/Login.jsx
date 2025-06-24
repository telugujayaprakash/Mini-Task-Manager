import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [Name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('Name', Name);
    localStorage.setItem('email', email);
    localStorage.setItem('pass', pass);
    setRedirect(true);
  };

  if (redirect) {
    window.location.reload();
  }

  return (
    <>
      <div className="text-2xl font-bold absolute mx-auto left-1/2 transform -translate-x-1/2">
        Login Page
      </div><br />
      <form onSubmit={handleLogin} className="flex flex-col items-center gap-4 mt-20">
        <input type="text" placeholder="Enter Name" className="border p-2" value={Name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2"/>
        <input type="password" placeholder="Enter Password" value={pass} onChange={(e) => setPass(e.target.value)} className="border p-2"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
