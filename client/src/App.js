import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContextProvider } from "./Context/AuthContext";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const {user} = useAuthContext()
  console.log("this is the user", user)
  
  const ProtectedRoute = ({children})=>{
    if(!user){
      console.log("hello")
      return <Navigate to="/login"/>
    }
    // console.log("hello", children)
    return children
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            } 
            />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />



        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
