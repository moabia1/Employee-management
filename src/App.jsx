import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:"admin"}))
    } else if (authData && authData.employee.find((e)=> email == e.email && password == e.password)) {
      setUser('employee')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
    } else {
      alert("invalid")
    }
  };
  
  
  return (
    <>
      {user && user == "admin" ?  <AdminDashboard /> : user && user == "employee"? <EmployeeDashboard />: <Login handleLogin={handleLogin} />}
      {/* {!user ?  : ""}
      {user != "admin" ?  :} */}
    </>
  );
}

export default App