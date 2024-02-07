import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Loginpage from "./Components/Loginpage";
import Homepage from "./Components/Homepage";

const App = ()=> {

 const appRouter = createBrowserRouter([
  {path:"/",element:<Loginpage/>},
  {path:"/SP-mnt", element:<Homepage/>}
])

  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
