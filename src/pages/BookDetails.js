import {useParams} from "react-router-dom";
import LayoutBookDetails from "../layouts/LayoutBookDetails";
import BookImage from "../components/bookDetails/BookImage";
import BookText from "../components/bookDetails/Text";
import {useGetBook} from "../graphql/useRequest";

function BookDetails(props) {
 
  const {id} = useParams();
  const { data, error, isLoading, isSuccess } = useGetBook(id);

  console.log({ data, error, isLoading, isSuccess });
  //useGetBook
    return (
      <LayoutBookDetails 
        left={data?.book && <BookImage book={data.book}/>}
        right={data?.book && <BookText book={data.book}/> } />
   
);

  }
export default BookDetails;