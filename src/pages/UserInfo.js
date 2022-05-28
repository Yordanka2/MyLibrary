import PersonalInformation from "../components/userInformation/PersonalInformation";
import PublicInformation from "../components/userInformation/PublicInformation";
import UserInfroLayout from "../layouts/UserInfroLayout";
import LoginForm from "../components/LoginForm";

function User(props) {

    return (
      <UserInfroLayout 
        left={<PersonalInformation/>}
 
    right={<PublicInformation/>} />
    );
  }

export default User;