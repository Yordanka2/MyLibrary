import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Form, Button, ButtonGroup, Modal } from "react-bootstrap";
import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';

import {Link} from "react-router-dom";
import LaunchModal from "../books/Modal"

function PublicInformation (props) {
    

   
 
    return (
    
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
    <h5 class="card-title">Брой прочетени книги</h5>
      <img src="https://content.oxfordhomeschooling.co.uk/wp-content/uploads/Books-on-Table-Circle-SGBerlin.png?x82050" class="card-img-top" alt="Книги" />
      <div class="card-body">
        
        <p class="card-text"> Прочетени книги до момента 10 книги</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <h5 class="card-title">Брой написани ревюта</h5>
      <img src="https://png.pngtree.com/png-clipart/20201209/original/pngtree-round-stars-design-png-image_5668528.jpg" class="card-img-top" alt="Ревюта" />
      <div class="card-body">
        
        <p class="card-text"> Имате създадени 5 ревюта.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <h5 class="card-title">Брой създадени и коментирани теми</h5>
      <img src="data:image/jpeg;base64,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" class="card-img-top" alt="forum" />
      <div class="card-body">
      
        <p class="card-text"> Няма информация </p>
      </div>
    </div>
  </div>
  </div>

   
    )
}
 
export default  PublicInformation; 