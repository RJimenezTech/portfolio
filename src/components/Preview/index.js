import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function Preview(props) {

    const {name, description, image} = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <a href="" className="link-icon" rel="noreferre noopener" onClick={handleShow}>
            <p>Preview</p>
        </a>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name} Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {description}
            <img src={image} alt={name} width="300" height="300"></img>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
        </>
      );
}

export default Preview;