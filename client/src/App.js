import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Signup/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />



        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
