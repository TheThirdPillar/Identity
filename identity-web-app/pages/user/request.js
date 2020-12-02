import Head from 'next/head'

import DefaultLayout from '../../layout/DefaultLayout'
import RequestContainer from '../../components/RequestContainer'

export default function Requests() {
  const isUserSession = true
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Requests</title>
      </Head>
      <RequestContainer />
    </DefaultLayout>
  )
}
