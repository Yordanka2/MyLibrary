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
        
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title>Резултат</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'primary': 'outline-primary'}
                            onClick={()=> setListView(true)}>
                            <FontAwesomeIcon icon={faThList}/>
                        </Button>
                        <Button variant={listView ? 'outline-primary': 'primary'}
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

    )
}
export default BookList;