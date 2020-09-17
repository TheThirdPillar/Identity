import Head from 'next/head'

import DefaultLayout from '../../layout/DefaultLayout'
import ProfileSection from '../../components/ProfileSection'
import RecordSection from '../../components/RecordSection'

export default function UserDashboard() {
  const isUserSession = true
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
        <ProfileSection />
        <RecordSection title="Education" />
        <RecordSection title="Work" />
    </DefaultLayout>
  )
}
