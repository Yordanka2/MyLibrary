import FeaturedImage from "../components/FeaturedImage";
import DefaultLayout from "../layouts/DefaultLayouts";
import LoginForm from "../components/LoginForm";

function Home(props) {

    return (
      <DefaultLayout 
        left={<FeaturedImage/>}
        right={<LoginForm/>}/>
    );
  }

export default Home;