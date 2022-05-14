import {Card, Button, ButtonGroup } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faFileZipper} from '@fortawesome/free-solid-svg-icons';

import {faFilePdf} from '@fortawesome/free-solid-svg-icons';

import {faBookOpen} from '@fortawesome/free-solid-svg-icons';

import {Link} from "react-router-dom";
import LaunchModal from "../books/Modal"

function BookListItemView({book}) {

    return (
        <Card>
            <Card.Body>
                <div className="d-flex py-3">
                    <img className="book-poster" variant="fluid"
                         src={book.image} alt={book.title}/>
                    <div className="px-3 flex-grow-1 ">
                        <div className="d-flex align-items-start justify-content-between ">
                            <div className="book-vote badge bg-primary">
                                {book.rating}
                            </div>
                            <div>
                                <LaunchModal/>
                            </div>
                        </div>
                        <div className="d-flex align-items-start justify-content-between">
                            <div className="d-flex justify-content-between align-items-center mb-8">
                                <Link to={`/books/${book._id}`}>
                                    <h4 className="book-title text-special">{book.title}</h4>
                                </Link>
                            </div>
                        </div>
                        <div className="fw-bold books-author">
                            <h5 className="books-author">{book.author}</h5>
                        </div>
                        <div className="fw-bold book-genre">
                            <h6 className="book-genre">{book.genre}</h6>
                        </div>
                        <div className="book-overview pt-3">
                            {book.description}
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                    <ButtonGroup size="mb-2" className="d-flex">
                        <div className="btn-group btn-group-ms-2">
                            <Button variant="outline-success"> zip
                                <FontAwesomeIcon icon={faFileZipper}/>
                            </Button>
                            <Button variant="outline-success"> pdf
                                <FontAwesomeIcon icon={faFilePdf}/>
                            </Button>
                            <Button variant="outline-success">Чети онлайн
                                <FontAwesomeIcon icon={faBookOpen}/>
                            </Button>
                        </div>
                    </ButtonGroup>
                </div>
                <br/>
                <hr className="my-9"></hr>
            </Card.Body>
        </Card>
    )
}

export default BookListItemView;