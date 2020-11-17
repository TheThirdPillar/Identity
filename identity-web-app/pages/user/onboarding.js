import Head from 'next/head'
import { useState } from 'react'
import Cookies from 'js-cookie'

import DefaultLayout from '../../layout/DefaultLayout'
import StepContainer from '../../components/StepContainer'
import FormContainer from '../../components/FormContainer'

export default function Onboarding() {
  
  const isUserSession = true
  const [currentStep, nextStep] = useState(1)

  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Onboarding</title>
      </Head>
      <StepContainer currentStep={currentStep} />
      <FormContainer currentStep={currentStep} />
    </DefaultLayout>
  )
}
