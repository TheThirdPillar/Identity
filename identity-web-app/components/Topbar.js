import { useRouter } from 'next/router'
import { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import Logo from './Logo'
import { FaArrowCircleDown, FaSignInAlt, FaSignOutAlt, FaRegIdCard, FaWallet, FaFolder } from 'react-icons/fa'
import { RiSendPlane2Fill } from "react-icons/ri"

function Topbar(props) {
  const isShieldInstalled = true
  const isUserSession = props.isUserSession

  var activeKey = 0

  const router = useRouter()

  if (router.pathname === '/user') {
    activeKey = 1
  } else if (router.pathname === '/user/request') {
    activeKey = 2
  } else if (router.pathname === '/user/wallet') {
    activeKey = 3
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <Navbar bg="white" expand="lg">
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle />
            {isUserSession &&
              <Navbar.Collapse className="justify-content-center">
                <Nav activeKey={activeKey}>
                  <Nav.Item>
                    <Nav.Link eventKey={1} href="/user"><FaRegIdCard /> Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={2} href="/user/request"><RiSendPlane2Fill /> Requests</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={3} href="/user/wallet"><FaWallet /> Wallet</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={4} href="#"><FaFolder /> Documents</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            }
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {!isShieldInstalled &&
                  <Button variant="primary" size="md" block="true">
                    Download Shield | <FaArrowCircleDown />
                  </Button>
                }
                {(isShieldInstalled && !isUserSession) &&
                  <Button variant="success" size="md">
                    Shield Login | <FaSignInAlt />
                  </Button>
                }
                {(isShieldInstalled && isUserSession) &&
                  <Button variant="dark" size="md">
                    Shield Logout | <FaSignOutAlt />
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
