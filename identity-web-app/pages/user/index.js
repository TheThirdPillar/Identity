import Head from 'next/head'
import useSWR from 'swr'

import DefaultLayout from '../../layout/DefaultLayout'
import ProfileSection from '../../components/ProfileSection'
import RecordSection from '../../components/RecordSection'
import SkillSection from '../../components/SkillSection'
import CustomModal from '../../components/Modal'
import { useState } from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function UserDashboard() {
  const isUserSession = true

  // Handle modal
  const [modalShow, setModalShow] = useState({show: false, form: 0})
  const handleModalShow = (form) => setModalShow({show: true, form: form})
  const handleModalClose = () => setModalShow({show: false})

  // Fetch user data
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>Failed to load data</div>
  if (!data) return <div>Loading...</div>

  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
        <ProfileSection user={data.personalInformation} handleAdd={(form) => handleModalShow(form)} />
        <SkillSection title="Skills" skills={data.skillInformation} handleAdd={(form) => handleModalShow(form)} />
        <RecordSection title="Education" handleAdd={(form) => handleModalShow(form)} />
        <RecordSection title="Work" handleAdd={(form) => handleModalShow(form)} />
        <CustomModal show={modalShow.show} onHide={() => handleModalClose()} form={modalShow.form} />
    </DefaultLayout>
  )
}
