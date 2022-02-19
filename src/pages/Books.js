
import LayoutBooks from "../layouts/LayoutBooks";
import Filters from "../components/filters/Filters";
import BookList from "../components/books/BookList"
import BookGridItem from "../components/books/BookGridItem"

function Books(props) {

    return (
      <LayoutBooks 
        left={<Filters/>}
        right={<BookList/>} />
    );
  }

 


export default Books;