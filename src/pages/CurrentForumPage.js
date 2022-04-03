import {useParams} from "react-router-dom";
import CurrentForumLayout from "../layouts/CurrentForumLayout";
import Header from "../components/forumPage/Header";

import Navbar from "../components/NavBar";

function CurrentForumPage(props) {
 
  const {id} = useParams();

    return (
      <>
         
         <CurrentForumLayout
        left={<Header/>} />
      
      </>
    );

  }
export default CurrentForumPage;