import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {

  const authUser = useContext(AuthContext)
  console.log(authUser)
  const employee = authUser.employee.find((e) => e.email);
  const admin = authUser.admin.find((e) => e.email);
  const logged = JSON.parse(localStorage.getItem('loggedInUser'))

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">{logged.role == "admin" ? admin.username : employee.username}👋</span>
      </h1>
      <button className='bg-red-500 text-xl font-medium px-4 py-1 rounded-sm'>Logout</button>
    </div>
  );
}

export default Header