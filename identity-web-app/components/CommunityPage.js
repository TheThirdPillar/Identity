import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'

import { FaNetworkWired, FaRegCopy } from 'react-icons/fa'
import { RiGovernmentLine } from 'react-icons/ri'

import SectionTitle from './SectionTitle'

function CommunityPage(props) {
  
  return (
    <>
      <Col xs={12} md={12} lg={12}>
        <Card className="mt-4 p-2">
          <Row className="justify-text-center">
            <Col xs={12} md={6} lg={3}>
              <Image src={props.community?.displayPicture} />
            </Col> 
            <Col xs={10} md={5} lg={9}>
              <Card.Body>
                <Card.Title className="text-capitalize font-weight-bold">
                  {props.community?.name + " "} 
                  <Badge pill variant={props.community?.networkRegistered ? "success" : "danger"}>
                    <FaNetworkWired className="mb-1" /> Network Verified
                  </Badge>
                  {" "}
                  <Badge pill variant={props.communuity?.metaphysicalRegistration ? "success" : "danger"}>
                    <RiGovernmentLine className="mb-1" /> Registered Entity
                  </Badge>
                </Card.Title>
                <Card.Subtitle className="text-muted">
                  identity.skillschain.org/community/{props.community.shortName}
                  {" "}
                  <FaRegCopy className="mb-1" />
                </Card.Subtitle>
                <Card.Text>
                  <Card.Link href={props.community?.website} target="_blank">
                    Community Website
                  </Card.Link>
                </Card.Text>
                <Card.Subtitle className="mb-2">
                  Company Registraion Information
                </Card.Subtitle>
                <Row>
                  <Col>
                    <Card.Text className="ml-2">GST: {props.community?.metaphysicalInformation?.companyGSTNumber}</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text className="ml-2">TAN: {props.community?.metaphysicalInformation?.companyTANNumber}</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Card.Text className="ml-2">CIN: {props.community?.metaphysicalInformation?.companyIdentificationNumber}</Card.Text>
                  </Col>
                  <Col>
                    <Card.Link href={props.community?.metaphysicalInformation?.companyIncorporationCertificate} target="_blank" className="ml-2">CIC: Click here to view certificate</Card.Link>
                  </Col>
                </Row>                
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
      <SectionTitle title="Directors" addButtonEnabled={false} />
      <SectionTitle title="Partners" addButtonEnabled={false} />
      <SectionTitle title="Members"  addButtonEnabled={false} />
    </>
  )
}

export default CommunityPage
