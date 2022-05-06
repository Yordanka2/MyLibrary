import { Card, Form, Button } from "react-bootstrap";
import SortBy from "./SortBy";
import Genres from "./Genres";

function Filters(props) {
    
    return (
        <Card className="mt-2 mt-md-3">
            <Card.Body>
                <Card.Title className="mb-3">Филтрирай</Card.Title>
               
                    <SortBy/>
                    <Genres/>
                    <Button 
                        variant="outline-success" 
                        type="submit">
                        Намери
                    </Button>
               
            </Card.Body>
        </Card>
    )
 }
export default Filters;