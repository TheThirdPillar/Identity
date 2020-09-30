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
import { MdExplore } from 'react-icons/md'

function Topbar(props) {
  const isShieldInstalled = true
  const isUserSession = props.isUserSession
  var navLinkDisabled = false

  var activeKey = 0

  const router = useRouter()

  if (router.pathname === '/user') {
    activeKey = 1
  } else if (router.pathname === '/user/request') {
    activeKey = 2
  } else if (router.pathname === '/user/wallet') {
    activeKey = 3
  } else if (router.pathname === '/user/documents') {
    activeKey = 4
  } else if (router.pathname === '/user/explorer') {
    activeKey = 5  
  } else if (router.pathname === '/user/onboarding') {
    navLinkDisabled = true
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle />
            {isUserSession &&
              <Navbar.Collapse className="justify-content-center">
                <Nav activeKey={activeKey}>
                  <Nav.Item>
                    <Nav.Link eventKey={1} href="/user" disabled={navLinkDisabled}><FaRegIdCard /> Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={2} href="/user/request" disabled={navLinkDisabled}><RiSendPlane2Fill /> Requests</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={3} href="/user/wallet" disabled={navLinkDisabled}><FaWallet /> Wallet</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={4} href="/user/documents" disabled={navLinkDisabled}><FaFolder /> Documents</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={5} href="#" disabled><MdExplore /> Explorer</Nav.Link>
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
