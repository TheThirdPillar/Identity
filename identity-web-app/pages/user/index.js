import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import Spinner from 'react-bootstrap/Spinner'

import DefaultLayout from '../../layout/DefaultLayout'
import ProfileSection from '../../components/ProfileSection'
import RecordSection from '../../components/RecordSection'
import SkillSection from '../../components/SkillSection'
import SoftskillSection from '../../components/SoftskillSection'
import VirtueSection from '../../components/VirtueSection'
import CommunitySection from '../../components/CommunitySection'
import VideoSection from '../../components/VideoSection'
import WellBeingSection from '../../components/WellBeingSection'

import CustomModal from '../../components/Modal'

import { domain } from '../../config/config'

export default function UserDashboard() {

  const router = useRouter()
  
  const [isUserSession, setUserSession] = useState(Cookies.get('token'))
  const [userData, setUserData] = useState()
  useEffect(() => {
    if (!userData && !isUserSession) router.push('/')
    if (!userData && isUserSession) {
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
          console.log(data.user)
          setUserData(data.user)
          updateSoftskills(data.user.softskills)
          updateVirtues(data.user.virtues)
          updateCommunities(data.user.communities)
          console.log(data.user.communities)
        } else {
          return (<h2>Unable to fetch user data.</h2>)
        }
      })
      .catch(error => {
        return (<h2>Unable to fetch user data.</h2>)
      })
    }
  }, [isUserSession])

  // Video Section
  const [showVideo, toggleShowVideo] = useState(false)
  const [videoURL, setVideoURL] = useState()

  // TODO: Segregate all fields of user data
  // TODO: Create Backend data models for front end also
  const [softskills, updateSoftskills] = useState([])
  const [virtues, updateVirtues] = useState([])
  const [communities, updateCommunities] = useState([])
  // Handle modal
  const [modalShow, setModalShow] = useState({show: false, form: {}})
  const handleModalShow = (form) => {
    setModalShow({show: true, form: form})
  }
  const handleModalClose = () => {
    setModalShow({show: false, form: {}})
  }

  const handleVideo = (url) => {
    setVideoURL(url)
    toggleShowVideo(true)
  }

  const handleVideoClose = () => {
      toggleShowVideo(false)
      setVideoURL('')
  }

  if (!userData) return (
    <Spinner animation="grow" variant="primary" size="sm" style={{marginTop: '20%', marginLeft: '45%'}} />
  )

  return (
    <>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
      <DefaultLayout isUserSession={isUserSession} toggleSesion={(session) => setUserSession(session)} >
        <ProfileSection user={userData.profile} username={userData.username} handleModalShow={(form) => handleModalShow(form)} isPublic={false} playMedia={(url) => handleVideo(url)} />
        {
            (showVideo)
                ? <VideoSection url={videoURL} showVideo={showVideo} closeVideo={() => handleVideoClose()} />
                : ""
        }
        <WellBeingSection title="Well-being Score" validation={userData.wellBeingValidation} stacks={userData.wellBeingStacks} score={userData.wellBeingScore} handleModalShow={(form) => handleModalShow(form)} isPublic={false} />
        <SkillSection title="Skills" skills={userData.skillRecords} handleModalShow={(form) => handleModalShow(form)} isPublic={false} />
        <SoftskillSection title="Softskills" softskills={softskills} handleModalShow={(form) => handleModalShow(form)} isPublic={false} />
        <VirtueSection title="Virtues" virtues={virtues} isPublic={false} handleModalShow={(form) => handleModalShow(form)} />
        <CommunitySection title="Communities" communities={communities} isPublic={false} handleModalShow={(form) => handleModalShow(form)} />
        <RecordSection title="Education" handleModalShow={(form) => handleModalShow(form)} records={userData.educationRecords} isPublic={false} />
        <RecordSection title="Work" handleModalShow={(form) => handleModalShow(form)} records={userData.professionalRecords} isPublic={false} />
        <CustomModal show={modalShow.show} onHide={() => handleModalClose()} form={modalShow.form.type} formData={modalShow.form.data} object={modalShow.form.object} isPublic={false} updateVirtues={(list) => updateVirtues(list)} updateUserCommunities={(list) => updateCommunities(list)} updateSoftskills={(list) => updateSoftskills(list)} />
      </DefaultLayout>
    </>
  )
}
