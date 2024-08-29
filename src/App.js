import './App.css';
import { UserProvider } from './Context/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Admin from './components/Admin';
import UserDetails from "./components/UserDetails"
import toast, { Toaster } from "react-hot-toast";




function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <section className="home">
          <Sidebar />
          <div className="hero">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/userdetails" element={<UserDetails />} />
            </Routes>
          </div>
          <Toaster />
        </section>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
