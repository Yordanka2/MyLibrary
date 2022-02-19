
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Forecast from "./pages/Forecast";
import Books from "./pages/Books";

const routes = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/user',
    element: <User/>
  },
  {
    path: '/forecast',
    element: <Forecast/>
  },
  {
    path: '/books',
    element: <Books/>
  },
]

function App() {

  function getRoutes() {
     return routes.map((route, index) => {
       return <Route 
              key={index}
              path={route.path}
              element={route.element}/>
     })
  }

  return (
    <BrowserRouter>
      <Routes>
        {getRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;