import SectionTitle from './SectionTitle'
import WellBeingCard from './WellBeingCard'

function WellBeingSection (props) {
    return (
        <>
            <SectionTitle title={props.title} subtitle={(props.subtitle) ? props.subtitle : "Not Validated"} addButtonEnabled={false} />
            <WellBeingCard />
        </>
    )
}

export default WellBeingSection