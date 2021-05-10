import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import CardDropdown from './CardDropdown'

function CommunityCards(props) {
  
  return (
    <>
      <Col xs={12} md={12} lg={4}>
        <Card
          bg="light"
          className="mt-2 mb-4 p-1 text-center">
          <div className="row">
            <span className="text-right col-12">
             {
               (!props.isPublic) ?  <CardDropdown color="#000000" data={props.community} handleEdit={props.handleEdit} handleDelete={() => props.handleDelete()} /> : <></>
             }
            </span>
          </div>
          <a href={props.community.community.website} target="_blank">
            <Card.Img variant="top" src={props.community.community?.displayPicture} />
            <Card.Header className="text-capitalize">
              {props.community.community?.name}
            </Card.Header>  
          </a>
          <Card.Body>
            <Card.Title>
              <a href={props.community.powURL} target="_blank">Proof of Work</a>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default CommunityCards
