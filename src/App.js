
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";

import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";


const routes = [
  {
    path: '/',
    element: <Home/>
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