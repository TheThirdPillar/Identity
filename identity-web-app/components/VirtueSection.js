import { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Dashboard.module.css'
import SectionTitle from './SectionTitle'

function VirtueSection(props) {

    const virtues = ['honesty', 'integrity', 'hardwork']

    return (
        <>
            <SectionTitle title={props.title} addButtonEnabled={!props.isPublic} handleAdd={() => props.handleModalShow({type: "7", data: {virtues: props.virtues}})} />
            <Row className="justify-content-center m-2">
                <Col xs={12} md={12} lg={12}>
                    <CardDeck className={styles.section}>
                        {
                            props.virtues.map((virtue, index) => {
                                return (
                                    <Badge variant="dark" key={index} className="text-uppercase p-4 m-2">{virtue}</Badge>
                                )
                            })
                        }
                    </CardDeck>
                </Col>
            </Row>
        </>
    )
}

export default VirtueSection
