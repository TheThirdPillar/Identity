import { useRouter } from 'next/router'

import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container'

function DefaultLayout(props) {

  return (
    <>
      <Container>
        <Topbar isUserSession={props.isUserSession} />
        <div>
          {props.children}
        </div>
          {
            (!props.isUserSession) ? <Footer /> : <></>
          }
      </Container>
    </>
  )
}

export default DefaultLayout
