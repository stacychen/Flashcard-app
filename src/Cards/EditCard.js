import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api";
import { Navigation } from "../Layout/Navigation";
import CardForm from "./CardForm";

function EditCard() {
    const [ deck, setDeck ] = useState({ card: []});
    const [card, setCard ] = useState({})
    const { deckId, cardId } = useParams();
    const history = useHistory()

    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        }

        loadDeck();
    }, [deckId]);


    useEffect(() => {
        async function loadCard() {
            const response = await readCard(cardId);
            setCard(response);
        }
        loadCard();
        }, [cardId]);


    const handleFrontChange = (event) => {
        setCard( {...card, front: event.target.value});
    }

    const handleBackChange = (event) => {
        setCard( {...card, back: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateCard(card)
        history.push(`/decks/${deckId}`)
    }

    const handleCancel = (event) => {
        history.push(`/decks/${deckId}`)
    }

    return (
        <div>
            <Navigation deck={deck} deckName={deck.name} last={`Edit Card ${card.id}`}/>
                <div className="row g-3">
                    <legend>Edit Card</legend>
                    <CardForm isEdit card={card} handleFrontChange={handleFrontChange} handleBackChange={handleBackChange}/>
                </div>
                    <button type='submit' onClick={handleCancel} className='btn btn-secondary'>Cancel</button>
                    <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
        </div>
    )
}

export default EditCard;