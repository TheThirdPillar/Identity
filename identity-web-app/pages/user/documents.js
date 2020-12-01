import Head from 'next/head'
import CardDeck from 'react-bootstrap/CardDeck'

import DefaultLayout from '../../layout/DefaultLayout'
import DocumentContainer from '../../components/DocumentContainer'
import DocumentCards from '../../components/DocumentCards'

export default function Documents() {
  const isUserSession = true
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Document</title>
      </Head>
      <DocumentContainer>
        <CardDeck>
          <DocumentCards verified={false} />
          <DocumentCards verified={true} />
          <DocumentCards verified={true} />
          <DocumentCards verified={true} />
          <DocumentCards verified={false} />
          <DocumentCards verified={false} />
          <DocumentCards verified={false} />
          <DocumentCards verified={true} />
          <DocumentCards verified={false} />
        </CardDeck>
      </DocumentContainer>
    </DefaultLayout>
  )
}
