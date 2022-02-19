import DefaultLayout from "../layouts/DefaultLayouts";
import StateExample from "../components/StateExample";

function User(props) {

    return (
      <DefaultLayout 
        left={<div>User</div>} 
        right={<StateExample/>}
      />
    );
  }

export default User;