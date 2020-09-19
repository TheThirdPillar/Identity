import Head from 'next/head'
import useSWR from 'swr'

import DefaultLayout from '../../layout/DefaultLayout'
import ProfileSection from '../../components/ProfileSection'
import RecordSection from '../../components/RecordSection'
import SkillSection from '../../components/SkillSection'

function getUser() {
  const { data, error } = useSWR('/api/user', fetch)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default function UserDashboard() {
  const isUserSession = true
  const { user, isLoading, isError } = getUser()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Failed to load data</div>

  console.log(user)
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
        <ProfileSection user={user.personalInformation} />
        <SkillSection title="Skills" />
        <RecordSection title="Education" />
        <RecordSection title="Work" />
    </DefaultLayout>
  )
}
