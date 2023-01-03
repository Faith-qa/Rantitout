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


function App() {

  //const {currentUser} = useContext(AuthContext)
  //console.log("this is the user", currentUser)
  
  // const ProtectedRoute = ({children})=>{
  //   if(!currentUser){
  //     return <Navigate to="/login"/>
  //   }
  //   // console.log("hello", children)
  //   return children
  //};
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
           
              <Home />
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
