import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";

import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Forum from "./pages/Forum";
import CurrentForumPage from "./pages/CurrentForumPage";
import HelpCenter from "./pages/HelpCenter";
import UserInfo from "./pages/UserInfo";
import {useCurrentUser} from "./graphql/useRequest";

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
    {
        path: '/forum',
        element: <Forum/>
    },
    {
        path: '/forum/:id',
        element: <CurrentForumPage/>
    },
    {
        path: '/helpcenter',
        element: <HelpCenter/>
    },
    {
        path: '/userinfo',
        element: <UserInfo/>
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

    const { data, isFetched } = useCurrentUser();

    if(!isFetched){
        return null;
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