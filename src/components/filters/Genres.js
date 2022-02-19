import {Form} from "react-bootstrap";


function Genres(props) {

    const checkboxes = [
        {
            value: 1,
            label: "Приказки",
            id: "fairy tales",
        },
        {
            value: 2,
            label: "Романи",
            id: "novels",
        },
        {
            value: 3,
            label: "Разкази за деца",
            id: "сtories for children",
        },
        {
            value: 4,
            label: "Детски стихове и гатанки",
            id: " poems and riddles",
        },
    ]
      function getCheckboxes(){
      return checkboxes.map(checkbox =>{ 
          return <Form.Group
                 key={checkbox.value}
                 controlId={'checkbox - ${checkbox.id}'}>
                 <Form.Check
                     value={checkbox.value}
                     type="checkbox"
                     label={checkbox.label}/>
                </Form.Group>
      })

      }
    return (
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlSelect1">
            <Form.Label>Избери жанр</Form.Label>
            {getCheckboxes()}
              
        </Form.Group>
    )


}
export default Genres;