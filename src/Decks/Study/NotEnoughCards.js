import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Layout/Navigation";

function NotEnoughCards ({deck}) {
    return (
        <div>
            <Navigation deck={deck} deckName={deck.name} last='Study'/>
            <div className="col-12 p-4 border">
                <h2>Study: {deck.name}</h2>
                <h3>Not enough cards.</h3>
                <p>You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
                <Link to={`/decks/${deck.id}/cards/new`} className='btn btn-primary'>+ Add Cards</Link>
            </div>
        </div>
    )
}

export default NotEnoughCards;