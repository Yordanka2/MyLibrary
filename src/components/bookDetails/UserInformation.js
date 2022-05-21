import {Card, Form, Button, ButtonGroup,} from "react-bootstrap";


function UserInformation(props) {


    return (
        <>
            <div className="col-md-4 py-4">

                <div className="d-flex">


                    <div className="px-2">
                        <div className=" book-titl mb-9 ">

                            <h6 className="book-title"> Георги</h6></div>


                        <div className="books-rating">
                            <h6 className="books-rating"> Рейтинг </h6></div>

                        <div className="book-vote badge bg-success  "> {6} </div>
                    </div>

                </div>

            </div>
            <div className="col-md-4 py-5">

                <div className="d-flex">


                    <div className="px-2">
                        <div className="fw-bold book-titl mb-9">

                            <h6 className="book-title"> Виктория</h6></div>


                        <div className="books-rating">
                            <h6 className="books-rating"> Рейтинг </h6></div>

                        <div className="book-vote badge bg-success  "> {5} </div>

                    </div>

                </div>

            </div>
            <div className="col-md-4 py-4">

                <div className="d-flex">


                    <div className="px-2">
                        <div className="fw-bold book-titl mb-9">

                            <h6 className="book-title"> Мария</h6></div>


                        <div className="books-rating">
                            <h6 className="books-rating"> Рейтинг </h6></div>

                        <div className="book-vote badge bg-success  "> {8} </div>

                    </div>

                </div>

            </div>
            <div className="col-md-4 py-4">

                <div className="d-flex">


                    <div className="px-2">
                        <div className="fw-bold book-titl mb-9">

                            <h6 className="book-title"> Иван</h6></div>


                        <div className="books-rating">
                            <h6 className="books-rating"> Рейтинг </h6></div>

                        <div className="book-vote badge bg-success  "> {7} </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default UserInformation;
