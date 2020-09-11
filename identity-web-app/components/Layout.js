import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Topbar from './Topbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <Topbar />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
