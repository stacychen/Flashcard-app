import React from "react";
import { Link } from "react-router-dom";

function Deck ({ deck, onDelete }) {
    return (
            <div className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
                <div className="border p-4 h-100 d-flex flex-column">
                    <h2 className="font-weight-lighter flex-fill">
                        {deck.name}
                    </h2>
                    <p className="font-weight-lighter flex-fill">
                        {deck.description}
                    </p>
                    <p className="mt-2">
                        {`${deck.cards.length} cards`}
                    </p>
                    <Link to={`/decks/${deck.id}`} className='btn btn-primary'>View</Link>
                    <Link to={`/decks/${deck.id}/study`} className='btn btn-primary'>Study</Link>
                    <button onClick={onDelete} className='btn btn-danger'>Delete</button>
            </div>
        </div>
        )};

export default Deck;
