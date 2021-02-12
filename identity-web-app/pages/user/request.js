import Head from 'next/head'
import { useState, useEffect } from 'react'
import Toasts from '../../components/Toasts'

import DefaultLayout from '../../layout/DefaultLayout'
import RequestContainer from '../../components/RequestContainer'

export default function Requests() {
  const isUserSession = true

  const [toastShow, setToastShow] = useState(false)
  const [toastType, setToastType] = useState()
  const [toastMessage, setToastMessage] = useState()

  const handleToast = (toastData) => {
    setToastType(toastData.toastType)
    setToastMessage(toastData.toastMessage)
    setToastShow(toastData.toastShow)
  }

  return (
    <>
      <DefaultLayout isUserSession={isUserSession}>
        <Head>
          <title>Identity - Requests</title>
        </Head>
        <RequestContainer handleToast={(toastData) => handleToast(toastData)} />
        <Toasts show={toastShow} message={toastMessage} type={toastType} />
      </DefaultLayout>
    </>
  )
}
