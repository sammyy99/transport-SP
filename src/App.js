import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./Components/Loginpage";
import Homepage from "./Components/Homepage";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/SP-mnt/*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
