import {useParams} from "react-router-dom";
import LayoutBookDetails from "../layouts/LayoutBookDetails";
import BookImage from "../components/bookDetails/BookImage";

function BookDetails(props) {
 
  const {id} = useParams();


    return (
      <LayoutBookDetails 
        left={< BookImage/>}
        right={<div></div> } />
   
);

  }
export default BookDetails;