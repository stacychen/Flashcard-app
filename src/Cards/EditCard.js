import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {listDecks, readCard, readDeck, updateCard, updateDeck} from "../utils/api";
import DecksNav, {Navigation} from "../Layout/Navigation";

function EditCard() {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const [deck, setDeck] = useState({ card: []});
    const [card, setCard] = useState({})
    const { deckId, cardId} = useParams();
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
        // setFront(event.target.value)
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
                <form>
                    <label htmlFor="front">Front</label>
                        <textarea
                            className="form-control"
                            id="front"
                            name="front"
                            onChange={handleFrontChange}
                            defaultValue={card.front} style={{width: '500px', height: '100px'}}/>
                    <label htmlFor="back">Back</label>
                        <textarea
                            className="form-control"
                            id="back"
                            name="back"
                            onChange={handleBackChange}
                            defaultValue={card.back} style={{width: '500px', height: '100px', marginBottom: '20px'}}/>
                    <button type='submit' onClick={handleCancel} className='btn btn-secondary'>Cancel</button>
                    <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
                </form>
           </div>
        </div>
    )
}

export default EditCard;