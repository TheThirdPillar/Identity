import SectionTitle from './SectionTitle'
import WellBeingCard from './WellBeingCard'

import { FaBrain } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function WellBeingSection (props) {

    const [overallScore, updateOverallScore] = useState(0)
    const [wellBeingStacks, updateWellBeingStacks] = useState(props.stacks)
    useEffect(() => {
        props.stacks.forEach(stack => {
            let score = 0
            for (var q of Object.keys(stack.stackRatings)) {
                score = score + Number(stack.stackRatings[q])
            }
            updateOverallScore(overallScore => overallScore + score)
        })
    }, [wellBeingStacks])

    return (
        <>
            <SectionTitle title={props.title} subtitle={
                <a href="#" onClick={() => props.handleModalShow({type: "10", data: props.stacks})}><FaBrain /> Manage Stack</a>
            } addButtonEnabled={false} />
            <WellBeingCard score={(overallScore * 5) / ( 2 * wellBeingStacks.length)} stacks={props.stacks} validation={props.validation} isPublic={props.isPublic} />
        </>
    )
}

export default WellBeingSection