import {BrowserRouter,Route, Routes} from "react-router-dom"
import Loginpage from "./Components/Loginpage";
import Homepage from "./Components/Homepage";

const App = ()=> {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>}></Route>
      <Route path="/SP-mnt/*" element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
