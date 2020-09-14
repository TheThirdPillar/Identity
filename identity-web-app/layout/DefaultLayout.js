import Topbar from '../components/Topbar'
import Footer from '../components/Footer'

function DefaultLayout(props) {
  return (
    <>
      <Topbar isUserSession={props.isUserSession} />
      <div>
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
