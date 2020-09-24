import Head from 'next/head'

import DefaultLayout from '../../layout/DefaultLayout'
import DocumentContainer from '../../components/DocumentContainer'

export default function Documents() {
  const isUserSession = true
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Wallet</title>
      </Head>
      <DocumentContainer />
    </DefaultLayout>
  )
}
