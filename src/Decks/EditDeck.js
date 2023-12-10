import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import { Navigation } from "../Layout/Navigation";


function EditDeck () {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [deck, setDeck] = useState({});
    const { deckId } = useParams();


    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        } loadDeck();
    }, [deckId]);

    const handleNameChange = (event) => {
        // setName(event.target.value)
        setDeck( {...deck, name: event.target.value});
    }

    const handleDescriptionChange = (event) => {
        // setDescription(event.target.value)
        setDeck( {...deck, description: event.target.value});
    }

    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateDeck(deck)
        history.push(`/decks/${deck.id}`)
    }

    const handleCancel = (event) => {
        history.push(`/decks/${deck.id}`)
    }

    return (
        <div>
            <Navigation deck={deck} deckName={deck.name} last='Edit Deck'/>
            <div className="row g-3">
            <legend>Edit Deck</legend>

            <form>
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleNameChange}
                    defaultValue={deck.name}/>
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={handleDescriptionChange}
                    defaultValue={deck.description} style={{marginBottom: '20px', height: '100px'}}/>
                <button type='submit' onClick={handleCancel} className='btn btn-secondary'>Cancel</button>
                <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default EditDeck;