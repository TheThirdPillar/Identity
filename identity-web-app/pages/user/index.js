import Head from 'next/head'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import DefaultLayout from '../../layout/DefaultLayout'
import ProfileSection from '../../components/ProfileSection'
import RecordSection from '../../components/RecordSection'
import SkillSection from '../../components/SkillSection'
import CustomModal from '../../components/Modal'

import fetcher from '../../utils/fetcher'

const domain = 'http://localhost:3000'

export default function UserDashboard() {
  const isUserSession = true

  // Handle modal
  const [modalShow, setModalShow] = useState({show: false, form: {}})
  const handleModalShow = (form) => {
    setModalShow({show: true, form: form})
  }
  const handleModalClose = () => {
    setModalShow({show: false, form: {}})
  }

  // Fetch user data
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    if (!userData) {
      fetch(domain + '/application/listen/identity/getUserData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + Cookies.get('token')
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.status == 'SUCCESS') {
          console.log(data.userData)
          setUserData(data.userData)
        }
        return <div>Unable to fetch user data ....</div>
      })
    }
  }, [userData])

  if (!userData) return <div>Loading...</div>

  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
        <ProfileSection user={userData.applicationData.profile} handleModalShow={(form) => handleModalShow(form)} />
        <SkillSection title="Skills" skills={userData.skillRecord} handleModalShow={(form) => handleModalShow(form)} />
        <RecordSection title="Education" handleModalShow={(form) => handleModalShow(form)} records={userData.educationRecord} />
        <RecordSection title="Work" handleModalShow={(form) => handleModalShow(form)} records={userData.professionalRecord} />
        <CustomModal show={modalShow.show} onHide={() => handleModalClose()} form={modalShow.form.type} formData={modalShow.form.data} />
    </DefaultLayout>
  )
}
