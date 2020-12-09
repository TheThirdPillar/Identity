import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import Spinner from 'react-bootstrap/Spinner'

import DefaultLayout from '../layout/DefaultLayout'
import ProfileSection from '../components/ProfileSection'
import SkillSection from '../components/SkillSection'
import RecordSection from '../components/RecordSection'
import CustomModal from '../components/Modal'

import { domain } from '../config/config'

export default function PublicProfile() {

    const router = useRouter()
    const { username } = router.query

    const [isUserSession, setUserSession] = useState(Cookies.get('token'))
    const [modalShow, setModalShow] = useState({show: false, form: {}})
    const [userData, setUserData] = useState()
    useEffect(() => {
        if (!userData && username) {
            fetch(domain + '/user/getidentityprofile?username=' + username, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + isUserSession
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'SUCCESS' && data.user && data.user.username) {
                    setUserData(data.user)
                } else {
                    return (
                        <h3>Unable to load user data.</h3>
                    )
                }
            })
        }        
    })

    if (!userData) return (
        <Spinner animation="grow" variant="primary" size="sm" style={{marginTop: '20%', marginLeft: '45%'}} />
    )

    // Handle modal
    const handleModalShow = (form) => {
        setModalShow({show: true, form: form})
    }
    const handleModalClose = () => {
        setModalShow({show: false, form: {}})
    }

    return (
        <>
            <Head>
                <title>Identity - Public Profile</title>
            </Head>
            <DefaultLayout isUserSession={isUserSession} toggleSession={(session) => setUserSession(session)}>
                <ProfileSection user={userData.profile} username={userData.username} handleModalShow={(form) => handleModalShow(form)} isPublic={true} />
                <SkillSection title="Skills" skills={userData.skillRecords} handleModalShow={(form) => handleModalShow(form)} isPublic={true} />
                <RecordSection title="Education" handleModalShow={(form) => handleModalShow(form)} records={userData.educationRecords} isPublic={true} />
                <RecordSection title="Work" handleModalShow={(form) => handleModalShow(form)} records={userData.professionalRecords} isPublic={true} />
                <CustomModal show={modalShow.show} onHide={() => handleModalClose()} form={modalShow.form.type} formData={modalShow.form.data} isPublic={true} />
            </DefaultLayout>
        </>
    )
}