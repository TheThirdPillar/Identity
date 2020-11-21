import Head from 'next/head'

import DefaultLayout from '../../layout/DefaultLayout'
import FormContainer from '../../components/FormContainer'

export default function Onboarding() {
  
  const isUserSession = true

  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Onboarding</title>
      </Head>
      <FormContainer />
    </DefaultLayout>
  )
}
