import React from "react";

export const Navigation = ({deck, deckName, last}) => {

    return (
    <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{fontSize: '20px'}}>
                <li className="breadcrumb-item">
                    <a href='/'>Home</a>
                </li>
                {deckName && (<li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>)}
                <li className="breadcrumb-item"><p className='link'>{last}</p></li>
            </ol>
        </nav>
    </div>
    )
};

export default Navigation;



