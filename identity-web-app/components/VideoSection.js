import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReactPlayer from 'react-player/youtube'
import { Transition } from 'react-transition-group'

import styles from '../styles/Dashboard.module.css'
import SectionTitle from './SectionTitle'

import { GrClose } from 'react-icons/gr'

const duration = 300
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyle = {
    entering: { opacity: 1},
    entered: { opacity : 1},
    exiting: {opacity: 0},
    exited: {opacity: 0},
}


function VideoSection(props) {
  return (
    <>
        <SectionTitle title="A brief introduction about me" addButtonEnabled={false} />
        <Row className="d-flex justify-content-end">
            <GrClose onClick={() => props.closeVideo()} />
        </Row>
        <Row className={"justify-content-center m-2 " +  styles.section}>
            <Col xs={12} md={6} lg={6}>
                <ReactPlayer url={props.url} />
            </Col>
        </Row>
    </>
  )
}

export default VideoSection
