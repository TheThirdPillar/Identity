import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FaArrowCircleDown } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'

import Logo from './Logo'

function Topbar() {
  const isShieldInstalled = true
  const isUserSession = false
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={8}>
          <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {!isShieldInstalled &&
                  <Button variant="primary" size="md" block="true">
                    Download Shield | <FaArrowCircleDown />
                  </Button>
                }
                {isShieldInstalled &&
                  <Button variant="success" size="md">
                    Shield Login | <FaSignInAlt />
                  </Button>
                }
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </>
  )
}

export default Topbar
