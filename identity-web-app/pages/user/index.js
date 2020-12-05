import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import Spinner from 'react-bootstrap/Spinner'

import DefaultLayout from '../../layout/DefaultLayout'
import ProfileSection from '../../components/ProfileSection'
import RecordSection from '../../components/RecordSection'
import SkillSection from '../../components/SkillSection'
import CustomModal from '../../components/Modal'

import { domain } from '../../config/config'

export default function UserDashboard() {

  const router = useRouter()
  
  const [isUserSession, setUserSession] = useState(Cookies.get('token'))
  const [userData, setUserData] = useState()
  useEffect(() => {
    if (!isUserSession) return router.push('/')
    if (!userData) {
      fetch(domain + '/application/listen/identity/getUserData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + isUserSession
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'SUCCESS') {
          if (!data.user.username) return router.push('/user/onboarding')
          setUserData(data.user)
        } else {
          return <h2>Unable to fetch user data.</h2>
        }
      })
    }
  }, [userData])
  // Handle modal
  const [modalShow, setModalShow] = useState({show: false, form: {}})
  const handleModalShow = (form) => {
    setModalShow({show: true, form: form})
  }
  const handleModalClose = () => {
    setModalShow({show: false, form: {}})
  }

  if (!userData) return (
    <>
      <div style={{marginLeft: '45%', marginTop: '20%'}}>
        <Spinner animation="grow" role="status" variant="primary" className="mr-1" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        </div>
    </>
  )

  return (
    <>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
      <DefaultLayout isUserSession={isUserSession} toggleSesion={(session) => setUserSession(session)} >
        <ProfileSection user={userData.profile} username={userData.username} handleModalShow={(form) => handleModalShow(form)} />
        <SkillSection title="Skills" skills={userData.skillRecords} handleModalShow={(form) => handleModalShow(form)} />
        <RecordSection title="Education" handleModalShow={(form) => handleModalShow(form)} records={userData.educationRecords} />
        <RecordSection title="Work" handleModalShow={(form) => handleModalShow(form)} records={userData.professionalRecords} />
        <CustomModal show={modalShow.show} onHide={() => handleModalClose()} form={modalShow.form.type} formData={modalShow.form.data} />
      </DefaultLayout>
    </>
  )
}
