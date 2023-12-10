import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList";

function Home () {

    return (
        <div>
            <Link to="/decks/new" className='btn btn-success'>Create Deck</Link>
            <DeckList />
        </div>
    )
}

export default Home;