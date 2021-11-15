import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SelectCookBook.css';
import service from '../../services/service'

export default function ChooseCookBook({ userCookbooks }) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(userCookbooks)
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Save Recipe
            </Button>
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Choose CookBook to add recipe:
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <select id="cookBooks" name="cookBookList">
                {userCookbooks.map(cookBookId => 
                    <option key={cookBookId} value={cookBookId}>
                    {service.getCookbooks}
                    </option> 
                )}
                
            </select>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
