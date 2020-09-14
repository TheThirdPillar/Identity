import Head from 'next/head'

import DefaultLayout from '../../layout/DefaultLayout'
import ProfileSection from '../../components/ProfileSection'

export default function UserDashboard() {
  const isUserSession = true
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
      <ProfileSection />
    </DefaultLayout>
  )
}
