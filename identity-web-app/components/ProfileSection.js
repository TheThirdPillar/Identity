import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Dashboard.module.css'
import SectionTitle from './SectionTitle'

import { FaPlay } from 'react-icons/fa'

import { domain } from '../config/config'

function ProfileSection(props) {
  return (
    <>
      <SectionTitle title="Personal Information" addButtonEnabled={false} />
      <Row className={"justify-content-center m-2 " +  styles.section}>
        <Col xs={12} md={12} lg={10}>
          <Card>
            <Row className="justify-text-center">
              <Col xs={3} md={3} lg={3}>
                <Image src={(props.user?.avatar && props.user.avatar !== "") ? (domain + "/" + props.user.avatar) : "/userThumbnail.png"} className="m-2 p-2" />
              </Col>
              <Col xs={9} md={9} lg={9}>
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {props.user?.fullname}
                    {" "}
                    <Badge pill variant={props.user?.verified ? "success" : "danger"}>
                      Verified
                    </Badge>
                    {" "} 
                    <span className="float-right">
                      {
                        (props.isPublic) 
                          ? <a href="#" onClick={() => props.handleModalShow({type: "11", data: {user: props.user, username: props.username }})}><u>Request user for private data</u></a>
                          : <a href="#" onClick={() => props.handleModalShow({type: "1", data: {user: props.user, username: props.username }})}> Edit </a>
                      }
                    </span>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">identity.skillschain.org/{props.username}</Card.Subtitle>
                  <Card.Text>
                    <Card.Link href="#">Email</Card.Link>
                    <Card.Link href="#">Mobile</Card.Link>
                  </Card.Text>
                  <Card.Link href={(props.user?.social?.facebook) ? props.user.social.facebook : "#"}>Facebook</Card.Link>
                  <Card.Link href={(props.user?.social?.twitter) ? props.user.social.twitter : "#"}>Twitter</Card.Link>
                  <Card.Link href={(props.user?.social?.linkedin) ? props.user.social.linkedin : "#"}>Linkedin</Card.Link>
                  <Card.Link href={(props.user?.social?.medium) ? props.user.social.medium : "#"}>Medium</Card.Link>
                  {
                    (props.user?.social?.youtube) 
                      ? 
                        (
                          <div className="mt-2">
                            <Card.Text>
                              <Card.Link href="#" onClick={() => {props.playMedia(props.user.social.youtube)}}>Click here to watch my introduction. <FaPlay /> </Card.Link>
                            </Card.Text>
                          </div>
                        )
                      : ""
                  }
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
