import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

import styles from '../styles/Dashboard.module.css'

function ErrorSection(props) {
  return (
    <>
        <Row className={"justify-content-center m-2 " +  styles.section}>
            <Col xs={12} md={6} lg={6}>
                <Alert variant="danger">
                    {props.msg}
                </Alert>
            </Col>
        </Row>
    </>
  )
}

export default ErrorSection
