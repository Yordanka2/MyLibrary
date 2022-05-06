
import CenterLayout from "../layouts/CenterLayout";
import FeaturedImage from "../components/helpcenter/FeaturedImage";

import LoginForm from "../components/helpcenter/LoginForm";


function HelpCenter(props) {
 
    return(
    <CenterLayout 
   
    left={<LoginForm/>} />

);
  
    }
  export default HelpCenter;