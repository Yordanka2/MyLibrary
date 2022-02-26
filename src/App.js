
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Forecast from "./pages/Forecast";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import BookDetailsSecond from "./pages/BookDetailsSecond";

const routes = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/reviews',
    element: <Reviews/>
  },
  {
    path: '/forecast',
    element: <Forecast/>
  },
  {
    path: '/books',
    element: <Books/>
  },
   {
    path: '/books/:id',
    element: <BookDetails/>
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