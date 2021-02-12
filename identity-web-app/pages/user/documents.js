import Head from 'next/head'
import {  useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import Spinner from 'react-bootstrap/Spinner'

import CardDeck from 'react-bootstrap/CardDeck'

import DefaultLayout from '../../layout/DefaultLayout'
import DocumentContainer from '../../components/DocumentContainer'
import DocumentCards from '../../components/DocumentCards'
import Toasts from '../../components/Toasts'

import { domain } from '../../config/config'

export default function Documents() {
  
  const [isUserSession, setSession] = useState(Cookies.get('token'))
  const [toastShow, setToastShow] = useState(false)
  const [toastType, setToastType] = useState()
  const [toastMessage, setToastMessage] = useState()
  const [documents, setDocuments] = useState()
  useEffect(() => {
    if (!isUserSession) return 
    fetch(domain + '/application/listen/identity/getDocuments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + isUserSession
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.status == 'SUCCESS') { 
        setDocuments(data.documents)
      } else {
        setToastType('danger')
        setToastMessage('Unable to fetch documents from the database.')
        setToastShow(true)
      }
    })
  }, [isUserSession])

  useEffect(() => {
    console.log("Document set")
    console.log(documents)
  }, [documents])

  if (!documents) return (
    <Spinner animation="grow" variant="primary" size="sm" style={{marginTop: '20%', marginLeft: '45%'}} />
  )

  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Document</title>
      </Head>
      <DocumentContainer>
        <CardDeck>
          {
            documents.map((document, index) => {
              return <DocumentCards document={document} index={index} />
            })
          }
        </CardDeck>
      </DocumentContainer>
      <Toasts show={toastShow} type={toastType} message={toastMessage} />
    </DefaultLayout>
  )
}
