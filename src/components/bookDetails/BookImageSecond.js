import { Card, Form, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

function BookImageSecond(props) {
return (
    <>
    <Card >
      <Card.Body>
      <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/12/4612.250.jpg'} alt={"Алиса в огледалния свят"}/>
          </div>
            <br />
                <ButtonGroup  size="mb-2" ClassName="d-flex align-items-start justify-content-between">
                   <Button variant="outline-primary"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-primary"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-primary" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>
       </Card.Body>
      </Card>
  </>
)
}
export default BookImageSecond;