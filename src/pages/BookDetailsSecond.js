import {useParams} from "react-router-dom";
import LayoutBookDetails from "../layouts/LayoutBookDetails";

import BookImageSecond from "../components/bookDetails/BookImageSecond"

function BookDetailsSecond(props) {
 
  const {id} = useParams();


    return (
      <LayoutBookDetails 
        left={< BookImageSecond/>}
        right={<div></div> } />
   
);

  }
export default BookDetailsSecond;