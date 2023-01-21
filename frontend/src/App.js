import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContextProvider} from './Context/UserContext';
import LoginPg from './Component/User/Login/loginPg';
import RegisterPg from "./Component/User/Register/registerPg";
import Body from "./Component/Insight-body-card/body";

function App() {
  return (
    <>
    <BrowserRouter>
    <UserContextProvider>
        <Routes>
          <Route path='/login' element={<LoginPg/>}/>
          <Route path="/register" element={<RegisterPg/>}/>
          <Route path="/" element={<Body/>}/>
        </Routes>
    </UserContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
