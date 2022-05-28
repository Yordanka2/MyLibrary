import { Card, Form, Button, ButtonGroup, Modal,ButtonToolbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import LaunchModal from "../books/Modal"

function PersonalInformation() {

    return (
        <>
        <Card >

            
     < div className="badge bg-success text-wrap" >
                           <h5 >  Йорданка </h5>
            </div>
         
        <img className="book-poster w-20"   variant="img-thumbnail"   className="rounded float-end"
              src={'https://irokonews.com/wp-content/uploads/2020/06/Capture-1-400x322.png'} alt={"АВАТАР"}/>

   <p class="text-start fw-bold">Настройки</p>
   <p class="text-start fw-bold">Лична информация</p>
   <p class="text-star fw-bold">Сигурност</p>
   <p class="text-star fw-bold">Изход</p>
      </Card>
  </>
)
}

export default PersonalInformation;