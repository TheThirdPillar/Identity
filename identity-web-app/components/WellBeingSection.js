import SectionTitle from './SectionTitle'
import WellBeingCard from './WellBeingCard'

import { FaBrain } from 'react-icons/fa'

function WellBeingSection (props) {

    let overallScore = (props.score * 5) / (props.stacks?.length * 2)

    return (
        <>
            <SectionTitle title={props.title} subtitle={
                <a href="#" onClick={() => props.handleModalShow({type: "10", data: props.stacks})}><FaBrain /> Manage Stack</a>
            } addButtonEnabled={false} />
            <WellBeingCard score={Number.isNaN(overallScore) ? 0 : overallScore} stacks={props.stacks} validation={props.validation} isPublic={props.isPublic} />
        </>
    )
}

export default WellBeingSection