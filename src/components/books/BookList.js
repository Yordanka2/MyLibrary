import BookListItem from "../books/BookListItem";
import BookGridItem from "../books/BookGridItem";
import {Card, ButtonGroup, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import {setListView } from "../../redux/actions";

function BookList(props) {

    
    const [listView, setListView] = useState(true); 
    const renderMovies = () => {
     
        return listView ? BookListItem() : BookGridItem();
    }


    return (
        <div className="mt-2 mt-md-3">
                
        <Card >
           
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mt-2 mt-md-3 ">
                    <Card.Title>Филтрирани книги</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'success': 'outline-success'}
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
                    {renderMovies()}
                </div>
               
            </Card.Body>
        
        </Card>
    </div>
    )
}
export default BookList;