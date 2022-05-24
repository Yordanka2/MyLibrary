import FeaturedImage from "../components/FeaturedImage";
import ReviewLayout from "../layouts/ReviewLayout";
import UserInfroLayout from "../components/UserInfroLayout";

function UserInfo(props) {

    return (
      <UserInfroLayout 
        left={<FeaturedImage/>}
        right={<LoginForm/>}/>
    );
  }

export default UserInfo;