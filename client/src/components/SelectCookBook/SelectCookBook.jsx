import React, { useEffect, useState } from 'react';
import SelectCookBookForm from "./SelectCookBookForm";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SelectCookBook.css';
import service from '../../services/service';

export default function ChooseCookBook({ user, saveRecipe, recipe }) {
    const [show, setShow] = useState(false);
    const [userCookBookData, setUserCookBookData] = useState(null);

    const [selectedCookBook, setSelectedCookBook] = useState(null);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getCookBookData = (userId) => {
        service.getUserCookBooksById(userId)
        .then(data => {
            setUserCookBookData(data.user.cookbooks)
        })
        .catch(err => console.log(err))
    }



    // console.log(userCookBookData)
    return (
        <>
            <Button variant="primary" onClick={() => { handleShow(); getCookBookData(user._id)} }>
                Save Recipe
            </Button>
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Choose CookBook to add recipe:
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <SelectCookBookForm userCookBookData={userCookBookData} />
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { saveRecipe(recipe,  ); handleClose();  } }>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
