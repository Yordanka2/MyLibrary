import {useParams} from "react-router-dom";
import CurrentForumLayout from "../layouts/CurrentForumLayout";

function CurrentForumPage(props) {
 
  const {id} = useParams();


    return (
      <CurrentForumLayout
        left={<div> 3 </div>}
        right={<div>4 </div> } />
   
);

  }
export default CurrentForumPage;