import Toast from 'react-bootstrap/Toast'

function Toasts(props) {
    
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
            position: 'relative',
            minHeight: '200px'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                }}
            >
            <Toast
                show={props.show} 
                delay={3000} 
                autohide={true}
                className={"bg-" + props.type}
            >
                <Toast.Header>
                    <strong className="mr-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body className="text-white">{props.message}</Toast.Body>
            </Toast>
            </div>
        </div>
    )
}

export default Toasts