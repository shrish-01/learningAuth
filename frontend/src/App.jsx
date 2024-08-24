import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './pages/header/Header'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Login } from './pages/auth/login/Login'
import { SignUp } from './pages/auth/signup/SignUp'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
