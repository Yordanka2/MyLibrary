import { Card, Form, Button } from "react-bootstrap";
import SortBy from "./SortBy";

import Genres from "./Genres";
import {useGetBook} from "../../components/BooksContext/BookContext";
import {useEffect} from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions";
import { useGetBooks } from "../../graphql/useRequest";

const checkboxes = [
    {
        value: 28,
        label: "Приказки",
        id: "fairytales",
    },
    {
        value: 35,
        label: "Роман",
        id: "novel",
    },
    {
        value: 12,
        label: "Разкази за деца",
        id: "adventure",
    },
    {
        value: 80,
        label: "Детски стихове и гатанки",
        id: "children/",
    },
]


function Filters(props) {
    
    const dispatch = useDispatch();

    const {
        selectedSortBy,
        
        checkedState,
    } = useBook();

    useEffect(() => {
        fetchBook();
    }, []);

    function filtersOnSubmit(e) {
        e.preventDefault();
        fetchBook();
    }

    function fetchBook() {
        dispatch(useGetBooks('_id', {
            
            "with_genres": getCheckedOptions(),
            "sort_by": selectedSortBy,
        }))
    }

    

    function getCheckedOptions() {
        const checkedOptions = checkedState.reduce((acc, curr, index) => {
            if(curr){
                return [...acc, checkboxes[index].value]
            }
            return acc
        }, [])
        return checkedOptions.toString();
    }

    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                <Form onSubmit={filtersOnSubmit}>
                    <SortBy/>
                    <Genres checkboxes={checkboxes}/>
                    <Button 
                        variant="primary" 
                        type="submit">
                        Намери
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Filters;