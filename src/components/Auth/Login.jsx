import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const submithandler = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">

      <div className="border-2 border-emerald-600 p-15">
        <form
          onSubmit={submithandler}
          className="flex flex-col items-center justify-center">
          
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-500"
            type="email"
            required
            placeholder="Enter your email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="text-white outline-none bg-transparent border-2 mt-3 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-500"
            type="password"
            required
            placeholder="Enter password"
          />

          <button
            className="text-white border-none outline-none border-2 mt-4 bg-emerald-600 text-xl rounded-full py-3 px-5">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login