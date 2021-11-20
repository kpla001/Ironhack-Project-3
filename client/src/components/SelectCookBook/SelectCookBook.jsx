import React, { useEffect, useState } from 'react';
import SelectCookBookForm from "./SelectCookBookForm";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SelectCookBook.css';
import service from '../../services/service';

export default function ChooseCookBook({ user, saveRecipeToCookBook, recipe }) {
    const [show, setShow] = useState(false);
    const [userCookBookData, setUserCookBookData] = useState(user?.cookbooks);

    const [selectedCookBook, setSelectedCookBook] = useState(user?.cookbooks[0]);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getCookBookData = (userId) => {
        service.getUserCookBooksById(userId)
        .then(data => {
            setUserCookBookData(data?.user?.cookbooks)
        })
        .catch(err => console.log(err))
    }

    const selectionHandler = (selection) => {
        setSelectedCookBook(selection)
    }

    console.log(user)
    console.log(selectedCookBook)
    // setInterval(() => console.log(userCookBookData), 2000)
    return (
        <>
            <Button variant="primary" style={{backgroundColor: "#299640"}} onClick={() => { handleShow(); getCookBookData(user._id)} }>
                <b>Save Recipe to CookBook</b>
            </Button>
    
            <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>
                    {userCookBookData?.length!==0 && 'Choose a CookBook to add recipe:'}
                    {userCookBookData?.length===0 && 'Please create a CookBook before adding recipes'}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                <SelectCookBookForm 
                userCookBookData={userCookBookData} 
                selectionHandler={selectionHandler}
                />

            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {userCookBookData?.length!==0 && <Button 
                    variant="primary" 
                    onClick={() => { saveRecipeToCookBook(recipe, selectedCookBook, user); handleClose();  } }
                    >
                        Save Changes
                    </Button>}
                </Modal.Footer>
            </Modal>
        </>
    )
}
