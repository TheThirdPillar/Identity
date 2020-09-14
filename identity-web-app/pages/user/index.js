import Head from 'next/head'

import DefaultLayout from '../../layout/DefaultLayout'

export default function UserDashboard() {
  const isUserSession = true
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Dashboard</title>
      </Head>
    </DefaultLayout>
  )
}
