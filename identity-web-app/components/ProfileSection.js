import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Dashboard.module.css'
import SectionTitle from './SectionTitle'

function ProfileSection(props) {
  return (
    <>
      <SectionTitle title="Personal Information" addButtonEnabled={false} />
      <Row className={"justify-content-center " +  styles.section}>
        <Col xs={12} md={12} lg={10}>
          <Card>
            <Row className="justify-text-center">
              <Col className="mt-2" xs={3} md={3} lg={2}>
                <Card.Img src="/userThumbnail.png" />
              </Col>
              <Col xs={9} md={9} lg={10}>
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {props.user.fullname}
                    {" "}
                    <Badge pill variant={props.user.verified ? "success" : "danger"}>
                      Verified
                    </Badge>
                    {" "} <a href="#" className="float-right" onClick={() => props.handleModalShow({type: "1", data: props.user})} > Edit </a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">identity.org/{props.user.username}</Card.Subtitle>
                  <Card.Text>
                    <Card.Link href="#">Email</Card.Link>
                    <Card.Link href="#">Mobile</Card.Link>
                  </Card.Text>
                  <Card.Link href="#">Facebook</Card.Link>
                  <Card.Link href="#">Twitter</Card.Link>
                  <Card.Link href="#">Linkedin</Card.Link>
                  <Card.Link href="#">Medium</Card.Link>
                </Card.Body>
              </Col>
            </Row>
            <Row>
            </Row>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={2}>
          <Image src="/qrcode.png" />
        </Col>
      </Row>
    </>
  )
}

export default ProfileSection
