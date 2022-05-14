import BookListItemView from "../books/BookListItemView";
import BookGridItem from "../books/BookGridItem";
import {Card, ButtonGroup, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import {useGetBooks} from "../../graphql/useRequest";

function BookList(props) {

    
    const [listView, setListView] = useState(true);
    const { data, error, isLoading, isSuccess } = useGetBooks();

    const renderBooks = () => {

        if(data?.books) {
            return data.books.map(book => {
                if(listView) {
                    return <BookListItemView
                        key={book._id}
                        book={book}
                    />
                }
                return null
                //TODO render BookGridItemView
                // return <BookListItemView
                //     key={book._id}
                //     book={book}
                // />
            })
        }
        return null;

        // return listView ? BookListItem() : BookGridItem();
    }


    if (error) return <h1>Something went wrong!</h1>;
    if (isLoading) return <h1>Loading...</h1>;
    console.log(data);

    return (
        <div className="mt-2 mt-md-3">
                
        <Card >
           
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mt-2 mt-md-3 ">
                    <Card.Title>Филтрирани книги</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'success': 'outline-success"'}
                            onClick={()=> setListView(true)}>
                            <FontAwesomeIcon icon={faThList}/>
                        </Button>
                        <Button variant={listView ? 'outline-success': 'success'}
                            onClick={()=> setListView(false)}>
                            <FontAwesomeIcon icon={faGripHorizontal}/>
                        </Button>
                    </ButtonGroup>
                </div>
                <hr/>
                <div className="row">
                    {renderBooks()}
                </div>
               
            </Card.Body>
        
        </Card>
    </div>
    )
}
export default BookList;