import React from 'react'

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Morkal 👋</span>
      </h1>
      <button className='bg-red-500 text-xl font-medium px-4 py-1 rounded-sm'>Logout</button>
    </div>
  );
}

export default Header