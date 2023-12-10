import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import Deck from "./Deck";

import {deleteDeck, listDecks, readCard} from "../utils/api";

export const DeckList = () => {
    const [decks, setDecks] = useState([]);
    const {deckId} = useParams();
    const history = useHistory()
    const [toDelete, setToDelete] = useState(false)

    useEffect(() => {
        async function getDecks () {
            const response = await listDecks(deckId);
            setDecks(response);
        }
        getDecks();
    }, [toDelete]);

    const handleDeckDelete = async (id) => {
        const isDelete = window.confirm("Delete this deck? You will not be able to recover it");
        if (isDelete) {
            setToDelete(true)
            await deleteDeck(id);
            setToDelete(false)
        }
    };

    const deckList = decks.map((deck) => <Deck key={deck.id} deck={deck}
                                               onDelete={() => handleDeckDelete(deck.id)} />);

    return (
        <div>
            <main className="container">
                <div className="row">{deckList}</div>
            </main>
        </div>
    );
};

export default DeckList;
