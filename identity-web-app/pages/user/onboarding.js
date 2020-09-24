import Head from 'next/head'

import DefaultLayout from '../../layout/DefaultLayout'
import StepContainer from '../../components/StepContainer'
import FormContainer from '../../components/FormContainer'

export default function Onboarding() {
  const isUserSession = true
  var currentStep = 0
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Requests</title>
      </Head>
      <StepContainer currentStep={currentStep} />
      <FormContainer currentStep={currentStep} />
    </DefaultLayout>
  )
}
