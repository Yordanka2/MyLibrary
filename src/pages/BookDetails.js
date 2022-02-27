import {useParams} from "react-router-dom";
import LayoutBookDetails from "../layouts/LayoutBookDetails";
import BookImage from "../components/bookDetails/BookImage";
import BookText from "../components/bookDetails/Text";

function BookDetails(props) {
 
  const {id} = useParams();


    return (
      <LayoutBookDetails 
        left={< BookImage/>}
        right={<BookText/> } />
   
);

  }
export default BookDetails;