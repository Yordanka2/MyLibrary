import NavBar from "../NavBar";
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {faList } from "@fortawesome/free-solid-svg-icons";
import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
function Header(props) {
    return (
 <>
        
     
     <Row> 
         
    <div id="page-header">
         <div className="headerbar  ">
             <div className=" d-flex align-items-start  justify-content-between md-3">
              <div id="site-description" >
                   <h3 class="text-lg-start fw-normal"> Форуми на Книжко </h3>
                   
            
                   <p class="text-sm-start fst-italic" > където се събират читатели</p>
                   <p class="text-start text-dark "> <h5> Подсекция: Общи приказки  </h5></p>
                   </div>      
                <form id="search" className="ms-3 py-3">
                 <fieldset>
                 <input type="texт-sm" title="Търсена по ключова дума" value="Търсене.." ></input>
                 <input className="button" value="Търсене" type="submit"></input>
                 <p class="fst-italic"> Разширено търсене</p>
               </fieldset>
           </form>
           </div>
        </div>
  </div>
  
      <Card>
  <div id="site-description" >
                   
                    <p text= "danger" class="text-start fw-normal text-danger"><h6> Правила </h6> </p>
                    <p class="text-start fst-italic text-danger">Уважавайте другите участници и се отнасяйте с тях така, както бихте желали те да се отнасят с вас! </p> 
  </div>  

           </Card>

   
    </Row>
  
       <Row className="py-3">
        <Card className="py-3">
        <a href="#" class="card-link" class="text-start text-dark "> <h6> Семейство сложи къщичка за книги пред дома си в Якоруда </h6></a>
         <p class="text-start fst-italic">от pechkov » 13 октомври 2020, 15:42 </p> 
        </Card>
        <Card className="py-3">
        <a href="#" class="card-link" class="text-start text-dark "> <h6> Странно ми е, че няма нищо от Мария Монтесори. </h6></a>
         <p class="text-start fst-italic">т cristo » 15 април 2022, 10:07 </p> 
        </Card>
        <Card className="py-3 align-items">
                
                <a href="#" class="card-link" class="text-start text-dark "> 
        
                <h6> Английско-български речник за Kindle </h6> </a>
               <p class="text-start fst-italic">от bbfl » 22 април 2021, 11:01 </p> 
               
                          
                          
             
                        
                     
        </Card>
        
        <Card className="py-3">
        <a href="#" class="card-link" class="text-start text-dark "> <h6> Търся книга на англиски, средно ниво </h6></a>
         <p class="text-start fst-italic">от iafko69 » 28 май 2021, 21:41 </p> 
        </Card>
        <Card className="py-3">
        <a href="#" class="card-link" class="text-start text-dark "> <h6> Най-добрите книги за 2021г.</h6></a>
         <p class="text-start fst-italic">от Читател » 04 декември 2021, 01:16 </p> 
        </Card>

       </Row>


  
   
 </>


    );
  }

export default Header;