import dynamic from 'next/dynamic'
import Cookies from 'js-cookie'

const Multiselect = dynamic(() => import('multiselect-react-dropdown').then(module => module.Multiselect),{
    ssr: false
})

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { domain } from '../config/config'

export default function SoftskillBox(props) {

    const softskills = ['communication', "leadership", "motivation", "teamwork", "decisiveness", "problem solving", "flexibility", "decisiveness", "flexibility"]

    const handleSelect = (list) => {
        if (list.length > 0) {
            fetch(domain + '/application/listen/identity/handleSoftskills', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                },
                body: JSON.stringify({softskills: list})
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status && data.status === 'SUCCESS') {
                    // Update softskills
                    props.updateSoftskills(data.identity.softskills)
                } else {
                    // Show error log
                }
            })
        }
    }

    return (
        <>
            <Row className="justify-content-center">
                <Col xl={10} md={10} sm={10}>
                    <h4>Select upto 5 Softskills</h4>
                    <Multiselect
                        options={softskills}
                        showCheckbox={true}
                        isObject={false}
                        placeholder="Select softskills"
                        selectionLimit="5"
                        avoidHighlightFirstOption={true}
                        onSelect={(list) => handleSelect(list)}
                        onRemove={(list) => handleSelect(list)}
                        selectedValues={props.softskills}
                    />
                </Col>
            </Row>
        </>
    )
}