import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { FaUpload } from 'react-icons/fa'

import DocumentContainer from './DocumentContainer'
import ExplorerButton from './ExplorerButton'

import connectToExtension from '../utils/extension'

import { domain } from '../config/config'

export default function DocumentList(props) {

    console.log(props.documents)

    const [serverRespose, setResponse] = useState()
    const [responseClass, setClass] = useState()
    const [documents, addDocument] = useState(props.documents)
    const [selectedFile, setSelectedFile] = useState(null)
    useEffect(() => {
        if (selectedFile) setLoading(true)
    }, [selectedFile])

    const isUserSession = Cookies.get('token')
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        if (isLoading) {
            let reader = new FileReader()
            reader.readAsDataURL(selectedFile)
            reader.onload = () => {
                let request = {}
                var filedata = reader.result
                request.query = 'encrypt'
                request.data = filedata
                connectToExtension(request)
                .then((response) => {
                    if (response && response.status == 'SUCCESS') {
                        // POST DATA
                        let requestBody = {}
                        requestBody.encryptedFile = response.encryptedFile
                        requestBody.encryptedKey = response.encryptedKey
                        requestBody.recordId = props.recordData._id
                        fetch(domain + '/application/listen/identity/addDocument', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + Cookies.get('token')
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify(requestBody)
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'SUCCESS') {
                                
                                setResponse('Successfully added the document')
                                setClass('success')
                                setTimeout(() => {
                                    props.closeModal()
                                    location.reload()
                                }, 3000)
                            } else {
                                setResponse('Failed to add document')
                                setClass('danger')
                            }
                        })
                    } else {
                        // Show Toast
                        setLoading(false)
                    }
                })
            }
        } else {
            setSelectedFile(null)
        }
    }, [isLoading])

    const requestVerification = (index) => {
        let receiverPublicKey = 'OQGTLncriKTgxtzOX0NEGB8OpbE6+ZHnSR7Y/xRobaM='
        let encryptedKey = documents[index].encryptedKey
        let request = {}
        request.query = 'share'
        request.data = {
            receiverPublicKey: receiverPublicKey,
            encryptedKey: encryptedKey
        }
        connectToExtension(request)
        .then(response => {
            if (response && response.status == 'SUCCESS') {
                // POST DATA
                let requestBody = {}
                requestBody.sharedKey = response.sharedKey
                requestBody.receiverPublicKey = response.receiverPublicKey
                requestBody.document = documents[index]._id
                fetch(domain + '/application/listen/identity/requestVerification', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookies.get('token')
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(requestBody)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'SUCCESS') {
                        setResponse('Successfully requested for verification.')
                        setClass('success')
                        setTimeout(() => {
                            props.closeModal()
                            location.reload()
                        }, 3000)
                    } else {
                        setResponse('Failed to request verification.')
                        setClass('danger')
                    }
                })
            } else {
                setClass('danger')
                setResponse('Unable to request verification')
            }
        })
    }

    const requestAccess = (index) => {
        if (!isUserSession) {
            setClass('warning')
            setResponse('Please sign in with SHIELD to request data.')
            return
        }

        let documentId = documents[index]._id
        let request = {}
        request.documentId = documentId
        fetch(domain + '/application/listen/identity/requestAccess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + isUserSession
            },
            body: JSON.stringify(request)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == 'SUCCESS') {
                setClass('success')
                setResponse('Successfully requested access to the user')
            } else {
                setClass('danger')
                setResponse('Unable to request access the moment.')
            }
        })
    }

    const viewDocument = (index) => {
        let encryptedKey = documents[index].encryptedKey
        let encryptedData = documents[index].encryptedFile
        let request = {}
        request.query = 'decrypt'
        request.data = {
            encryptedData: encryptedData,
            encryptedKey: encryptedKey,
            originalPublicKey: false
        }
        connectToExtension(request)
        .then(response => {
            if (response && response.status === 'SUCCESS') {
                // Show in a different tab
                let imageSource = response.decryptedData
                var image = new Image()
                image.src = imageSource
                var w = window.open("")
                w.document.write(image.outerHTML)
            } else {
                setResponse('Failed to decrypt document.')
                setClass('danger')
            }
        })

    }

    return (
      <DocumentContainer>
        <Table>
            {
                (props.isPublic) ? 
                (
                    <>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                documents.map((document, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td className="text-capitalize">{(document.signed && document.signed.status) ? document.signed.status : 'Not Requested'}</td>
                                        <td><Button className="btn btn-warning" size="sm" onClick={() => requestAccess(index)} disabled={!document.signed || document.signed.status !== 'accepted'}>Request Access</Button></td>
                                    </tr>
                                )  
                                })
                            }
                        </tbody>
                    </>
                ) : 
                (
                    <>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Action</th>
                                <th>Explorer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                documents.map((document, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td className="text-capitalize">{(document.signed && document.signed.status) ? document.signed.status : 'Not Requested'}</td>
                                            <td><Button className="btn btn-info" size="sm" onClick={() => viewDocument(index)}>View Document</Button></td>
                                            <td><Button className="btn btn-warning" size="sm" onClick={() => requestVerification(index)} disabled={(document.signed && document.signed.status)}>Request Verification</Button></td>
                                            <td><ExplorerButton document={document} /></td>
                                        </tr>
                                    )  
                                })
                            }
                        </tbody>
                    </>
                )      
            }
        </Table>
        {
            (props.isPublic) ? <></> : 
            <Row>
                <Col className="text-center">
                    <input type="file" id="actual-btn" onChange={(e) => setSelectedFile(e.target.files[0])}  hidden></input>
                    <label htmlFor="actual-btn" className="btn btn-primary"><FaUpload className="mb-1" />{isLoading ? ' Loading...' : ' Add New Document'}</label>
                </Col>
            </Row>
        }
        <Row>
            <p className={'text-' + responseClass}>{serverRespose}</p>
        </Row>
      </DocumentContainer>
    )
}
