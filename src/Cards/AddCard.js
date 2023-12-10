import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import Navigation from "../Layout/Navigation";
import CardForm from "./CardForm";

function AddCard() {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const [deck, setDeck] = useState({});
    const { deckId } = useParams();
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
                    <CardForm isEdit={false} deck={deck} handleFrontChange={handleFrontChange} handleBackChange={handleBackChange} />
            </div>
                <button type='submit' onClick={handleDone} className='btn btn-primary'>Done</button>
                <button type='submit' onClick={handleSave} className='btn btn-secondary'>Save</button>
        </div>
    )
}

export default AddCard;