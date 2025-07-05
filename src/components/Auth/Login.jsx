import React from 'react'

const Login = () => {
  const submithandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">

      <div className="border-2 border-emerald-600 p-15">
        <form
          onSubmit={submithandler}
          className="flex flex-col items-center justify-center">
          
          <input
            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-500"
            type="email"
            required
            placeholder="Enter your email"
          />

          <input
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