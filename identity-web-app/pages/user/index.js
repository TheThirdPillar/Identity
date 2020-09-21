import Head from 'next/head'
import useSWR from 'swr'

import DefaultLayout from '../../layout/DefaultLayout'
import ProfileSection from '../../components/ProfileSection'
import RecordSection from '../../components/RecordSection'
import SkillSection from '../../components/SkillSection'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function UserDashboard() {
  const isUserSession = true
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>Failed to load data</div>
  if (!data) return <div>Loading...</div>

  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
        <ProfileSection user={data.personalInformation} />
        <SkillSection title="Skills" skills={data.skillInformation} />
        <RecordSection title="Education" />
        <RecordSection title="Work" />
    </DefaultLayout>
  )
}
