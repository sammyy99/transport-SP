import {BrowserRouter,Route, Routes} from "react-router-dom"
import Loginpage from "./Components/Loginpage";
import Homepage from "./Components/Homepage";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";

const App = ()=> {


  return (
    <Provider store={appStore}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>}></Route>
      <Route path="/SP-mnt/*" element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
