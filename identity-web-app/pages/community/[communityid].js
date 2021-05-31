import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import Spinner from 'react-bootstrap/Spinner'

import DefaultLayout from '../../layout/DefaultLayout'
import ErrorSection from '../../components/ErrorSection'
import CommunityPage from '../../components/CommunityPage'

import { domain } from '../../config/config'

export default function PublicProfile() {

    const router = useRouter()
    const { communityid } = router.query

    const [isUserSession, setUserSession] = useState(Cookies.get('token'))
    const [communityData, setCommunityData] = useState(null)
    useEffect(() => {
        if ( communityData == null && communityid) {
            fetch(domain + '/community/' + communityid, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + isUserSession
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                if (data.status === 'SUCCESS' && data.community && data.community.shortName) {
                    setCommunityData(data.community)
                }

                if (data.status === 'SUCCESS' && data.community == null) {
                    setCommunityData(false)
                }

                // TODO: Handle other possible errors
            })
        }
    }, [communityData, communityid])

    if (communityData == null) return (
        <Spinner animation="grow" variant="primary" size="sm" style={{marginTop: '20%', marginLeft: '45%'}} />
    )

    if (!communityData) return (
        <>
            <Head>
                <title>Identity - Community Profile</title>
            </Head>
            <DefaultLayout isUserSession={isUserSession} toggleSession={(session) => setUserSession(session)}>
                <ErrorSection msg="Community not found" />
            </DefaultLayout>
        </>
    )

    return (
        <>
            <Head>
                <title>Identity - Community Profile</title>
            </Head>
            <DefaultLayout isUserSession={isUserSession} toggleSession={(session) => setUserSession(session)}>
               <CommunityPage community={communityData} />
            </DefaultLayout>
        </>
    )
}