import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Navigation from "../../Layout/Navigation";

function StudyDeck ({deck}) {
    const {deckId} = useParams();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [back, setBack] = useState(false)
    const history = useHistory()

    const cardsInDeck = deck.cards

    const flipHandler = (event) => {
        event.preventDefault()
        setBack(true)
    }

    const nextHandler = (event) => {
        event.preventDefault()
        setBack(false)
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === deck.cards.length - 1) {
            const restart = window.confirm("Restart cards? Click 'cancel' to return to the home page");
            if (restart) {
                setCurrentIndex(0)
                history.push(`/decks/${deckId}/study`)
            } else {
                history.push('/')
            }
        }
    }

        return  (
            <div>
                <Navigation last='Study' deckName={deck.name} deck={deck}/>
                <div className="col-12 p-4 border">
                    <h2>Study: {deck.name}</h2>

                    <h3>Card {currentIndex + 1} of {deck.cards.length}</h3>
                    {!back ? <p>{cardsInDeck[currentIndex].front}</p> :
                    <div>
                        <p>{cardsInDeck[currentIndex].back}</p>
                    </div>
                }
                    <button onClick={flipHandler} className='btn btn-secondary'>Flip</button>

                    {back && <button onClick={nextHandler} className='btn btn-success'>Next</button>}
                </div>
            </div>
        )
}

export default StudyDeck;


