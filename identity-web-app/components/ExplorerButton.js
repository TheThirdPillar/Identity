import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FaWpexplorer } from 'react-icons/fa'

export default function ExplorerButton (props) {

    const placement = 'right'

    return (
        <>
            <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                            {(!props.document?.signed || props.document?.signed?.status === 'pending')
                                ? <strong>Not signed yet</strong>
                                :   <> 
                                        Validated by <strong>{(props.document?.signedBy.profile?.fullname).toUpperCase()}</strong><br />
                                        Validated by <strong>{(props.document?.signedBy.admin.name).toUpperCase()}</strong><br />
                                        Requested on <strong>{new Date(props.document?.signed.requestedOn).toString()}</strong><br />
                                        Validated on <strong>{new Date(props.document?.signed.dateOfAction).toString()}</strong><br />
                                        Hash: <strong>{props.document?.signedHash}</strong><br />
                                        Signature: <strong>{props.document?.signature}</strong><br />
                                    </>
                            }    
                    </Tooltip>
                }
            >
                <Button variant="light"><FaWpexplorer /></Button>
            </OverlayTrigger>
        </>
    )
}
