import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import DefaultLayout from '../../layout/DefaultLayout'
import FormContainer from '../../components/FormContainer'

export default function Onboarding() {
  
  const router = useRouter()
  const [isUserSession, setSession] = useState(Cookies.get('token'))
  useEffect(() => {
    if (!isUserSession) router.push('/')
  })

  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Onboarding</title>
      </Head>
      <FormContainer />
    </DefaultLayout>
  )
}
