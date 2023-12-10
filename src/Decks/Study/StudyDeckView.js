import React, { useEffect, useState } from "react";
import NotEnoughCards from "./NotEnoughCards";
import StudyDeck from "./StudyDeck";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";

function StudyDeckView () {

    const [deck, setDeck] = useState({cards: []});
    const {deckId, cardId} = useParams();

    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId, null);
            setDeck(response);
        }

        loadDeck();
    }, [deckId]);

    if(deck.cards.length > 2) {
        return  <StudyDeck deck={deck} />
    } return <NotEnoughCards deck={deck} />
}

export default StudyDeckView;