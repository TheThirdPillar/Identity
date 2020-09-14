import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function ProfileSection() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={5}>
          <Row>
            <Col xs={12} md={12} lg={3}>
              <Image src="/userThumbnail.png" thumbnail />
            </Col>
            <Col xs={12} md={12} lg={7}>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={12} lg={3}>
          <Image src="/userThumbnail.png" thumbnail />
        </Col>
      </Row>
    </>
  )
}

export default ProfileSection
