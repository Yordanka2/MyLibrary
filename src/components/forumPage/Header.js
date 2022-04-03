import NavBar from "../NavBar";
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

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
  

  <a href="#" class="card-link" class="text-start text-dark "> <h5> Общи приказки  </h5></a>
      <Card>
  <div id="site-description" >
                   
                    <p text= "danger" class="text-start fw-normal text-danger"><h6> Правила </h6> </p>
                    <p class="text-start fst-italic text-danger">Уважавайте другите участници и се отнасяйте с тях така, както бихте желали те да се отнасят с вас! </p> 
  </div>  

           </Card>

   
    </Row>
   
   
 </>


    );
  }

export default Header;