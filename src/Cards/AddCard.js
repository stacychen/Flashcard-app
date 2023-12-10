import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import Navigation from "../Layout/Navigation";

function AddCard() {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const [deck, setDeck] = useState({});
    const {deckId} = useParams();
    const history = useHistory()

    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        }
        loadDeck();
    }, [deckId]);

    const handleFrontChange = (event) => {
        setFront(event.target.value)
    }

    const handleBackChange = (event) => {
        setBack(event.target.value)
    }

    const handleDone = async (event) => {
        event.preventDefault();
        // await createCard(deckId, {front, back})
        history.push(`/decks/${deck.id}`)
    }

    const handleSave = async (event) => {
        event.preventDefault();
        await createCard(deckId, {front, back})
        setFront('')
        setBack('')
    }

    return (
        <div>
            <Navigation deck={deck} deckName={deck.name} last='Add Card' />
            <div className="row g-3">
            <legend>Add Card: {deck.name}</legend>
            <form>
                <label htmlFor="front">Front</label>
                <textarea
                    className="form-control"
                    id="front"
                    type="text"
                    name="front"
                    onChange={handleFrontChange}
                    placeholder='Front side of card'
                    value={front}
                    style={{width: '500px', height: '100px'}} />
                <label htmlFor="back">Back</label>
                <textarea
                    className="form-control"
                    id="back"
                    type="text"
                    name="back"
                    onChange={handleBackChange}
                    placeholder='Back side of card'
                    value={back}
                    style={{width: '500px', height: '100px', marginBottom: '20px'}} />
                <button type='submit' onClick={handleDone} className='btn btn-primary'>Done</button>
                <button type='submit' onClick={handleSave} className='btn btn-secondary'>Save</button>
            </form>
            </div>
        </div>
    )
}

export default AddCard;