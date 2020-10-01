import Dropdown from 'react-bootstrap/Dropdown'
import { ImMenu3 } from 'react-icons/im'

function CardDropdown(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle>
                <ImMenu3 />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={props.handleEdit}>Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CardDropdown