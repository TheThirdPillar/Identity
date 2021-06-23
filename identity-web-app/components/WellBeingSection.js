import SectionTitle from './SectionTitle'
import WellBeingCard from './WellBeingCard'

import { FaBrain } from 'react-icons/fa'

function WellBeingSection (props) {

    return (
        <>
            <SectionTitle title={props.title} subtitle={
                (props.validator) 
                ? props.validator.name.toUpperCase() 
                : <a href="#" onClick={() => props.handleModalShow({type: "10", data: props.stacks})}><FaBrain /> Manage Stack</a>
            } addButtonEnabled={false} />
            <WellBeingCard score={props.score} stacks={props.stacks} />
        </>
    )
}

export default WellBeingSection