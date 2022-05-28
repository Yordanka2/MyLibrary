import React, { useContext, useState } from "react";
import axios from 'axios';
import constants from '../../constants';
import moment from "moment";

const BookContext = React.createContext();

export function useGetBook() {
    return useContext(BookContext);
}
export function BookProvider(props) {

    const [selectedSortBy, setSelectedSortBy] = useState("popularity.desc");
  
    
    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );

   // const [listView, setListView] = useState(true);


    const [book, setBook] = useState([]);
  // how to change it
    /*const fetchBook = (path, params) => {
        axios.get(`${constants.baseUrl}${path}` , {
            params: {...params, api_key: constants.apiKey}
        })
        .then(response => {
            setMovies(response.data.results);
        })
    }*/

    return (
        <BookContext.Provider value={{
                selectedSortBy, 
                setSelectedSortBy,
                
                checkedState,
                setCheckedState,
                books,
                useGetBook,
                fetchBooks,
               
            }}>
            {props.children}
        </BookContext.Provider>
    )