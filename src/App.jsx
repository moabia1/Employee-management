import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthProvider, { AuthContext } from './context/AuthProvider'

const App = () => {
  const {userData,setUser,user} = useContext(AuthContext)


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser?.role) {
      setUser(storedUser.role);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (userData && userData.admin.find((e)=> email == e.email && password == e.password)) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:"admin",email}))
    } else if (userData && userData.employee?.find((e)=> email == e.email && password == e.password)) {
      setUser('employee')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee",email }));
    } else {
      alert("invalid")
    }
  };
  
  
  return (
    <>
      {user && user == "admin" ?  <AdminDashboard /> : user && user == "employee"? <EmployeeDashboard />: <Login handleLogin={handleLogin} />}
    </>
  );
}

export default App