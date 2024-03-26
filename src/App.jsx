import { Route, Routes } from "react-router";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

function App() {
  return (
    <>
    <ToastContainer autoClose={3000} position="top-center" />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/update" element={<UpdateUser/>}/>
        <Route path="/delete" element={<DeleteUser/>}/>
      </Routes>
    </>
  );
}

export default App;
