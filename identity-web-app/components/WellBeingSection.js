import SectionTitle from './SectionTitle'
import WellBeingCard from './WellBeingCard'

function WellBeingSection (props) {

    return (
        <>
            <SectionTitle title={props.title} subtitle={
                (props.validator) 
                ? props.validator.name.toUpperCase() 
                : <a href="#" onClick={() => props.handleModalShow({type: "10", data: props.stacks})}>Get Validated</a>
            } addButtonEnabled={false} />
            <WellBeingCard score={props.score} stacks={props.stacks} />
        </>
    )
}

export default WellBeingSection