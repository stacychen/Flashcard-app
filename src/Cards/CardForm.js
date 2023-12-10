import React from "react";

function CardForm ({ isEdit, card, handleFrontChange, handleBackChange }) {

    return (
        <form>
            <label htmlFor="front">Front</label>
            <textarea
                className="form-control"
                id="front"
                name="front"
                onChange={handleFrontChange}
                placeholder='Front side of card'
                defaultValue={isEdit ? card.front : null}
                style={{width: '500px', height: '100px'}} />
            <label htmlFor="back">Back</label>
            <textarea
                className="form-control"
                id="back"
                name="back"
                onChange={handleBackChange}
                placeholder='Back side of card'
                defaultValue={isEdit ? card.back : null}
                style={{width: '500px', height: '100px', marginBottom: '20px'}} />
        </form>
    )
}

export default CardForm;