import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../utils/api";
import Navigation from "../Layout/Navigation";


function DeckDetails() {
    const [deck, setDeck] = useState({cards: []});
    const { deckId, cardId } = useParams();
    const [toDelete, setToDelete] = useState(false)
    const history = useHistory()

    useEffect(() => {

        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        } loadDeck();
    }, [toDelete]);


    const handleDeckDelete = async (id) => {
        const isDelete = window.confirm("Delete this deck? You will not be able to recover it");
        if (isDelete) {
            // setToDelete(true)
            await deleteDeck(deckId);
            // setToDelete(false)
            history.push('/')
        }
    };

    const handleCardDelete = async (id) => {
        const isDelete = window.confirm("Delete this card? You will not be able to recover it");
        if (isDelete) {
            setToDelete(true)
            await deleteCard(id);
            setToDelete(false)
        }
    };

    return (
        <div>
            <Navigation deck={deck} last={deck.name}/>
            <section className="col-12 p-4 border" style={{marginBottom: '20px'}}>
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>

                    <Link to={`/decks/${deck.id}/edit`} className='btn btn-primary'>Edit</Link>
                    <Link to={`/decks/${deck.id}/study`} className='btn btn-primary'>Study</Link>
                    <Link to={`/decks/${deck.id}/cards/new`} className='btn btn-primary'>Add Cards</Link>
                <button onClick={handleDeckDelete} className='btn btn-danger'>Delete</button>
            </section>

            <h2>Cards</h2>

            <div>
                {deck.cards.map((card, index) => (
                    <div key={index} className="col-12 p-4 border">
                        <p>{card.front}</p>
                        <p>{card.back}</p>

                            <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className='btn btn-primary'>Edit</Link>


                        <button onClick={() => handleCardDelete(card.id)} className='btn btn-danger'>Delete</button>
                    </div>
                ))}
            </div>

        </div>
    )
};

export default DeckDetails;