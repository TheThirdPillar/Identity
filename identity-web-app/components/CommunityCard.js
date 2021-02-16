import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import CardDropdown from './CardDropdown'

function CommunityCards(props) {
  
  return (
    <>
      <Col xs={12} md={12} lg={4}>
        <Card
          bg="light"
          className="mt-4 mb-4 p-1 text-center">
          <div className="row">
            <span className="text-right col-12">
             {
               (!props.isPublic) ?  <CardDropdown color="#000000" data={props.community} handleEdit={props.handleEdit} handleDelete={() => props.handleDelete()} /> : <></>
             }
            </span>
          </div>
          <Card.Img variant="top" src={props.community.community?.displayPicture} />
          <Card.Header className="text-capitalize">
            {props.community.community?.name}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <a href={props.community.powURL} target="_blank">Click here for community profile</a>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default CommunityCards