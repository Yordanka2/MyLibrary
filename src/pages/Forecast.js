import DefaultLayout from "../layouts/DefaultLayouts";
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { getWeather } from "../redux/actions";
import Weather from "../components/Weather";

function Forecast(props) {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getWeather());
    }, []);

    return (
      <DefaultLayout left={<Weather/>} />
    );
  }

export default Forecast;