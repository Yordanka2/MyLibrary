import {useParams} from "react-router-dom";
import LayoutBookDetails from "../layouts/LayoutBookDetails";
import BookImage from "../components/bookDetails/BookImage";
import BookText from "../components/bookDetails/Text";
import BookImageView from "../components/bookDetails/BookImageView";
import TextView from "../components/bookDetails/TextView";
import {useGetBooks} from "../components/graphql/useRequest";
function BookDetails(props) {
 
  const {id} = useParams();
  const { data, error, isLoading, isSuccess } = useGetBook(id);

  const { data, error, isLoading, isSuccess } = useGetBooks();


    return (
      <LayoutBookDetails 
        left={data?.book && <BookImage book={data.book}/>}
        right={data?.book && <BookText book={data.book}/> } />
   
);

  }
export default BookDetails;