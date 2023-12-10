import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import Navigation from "../Layout/Navigation";


function CreateDeck () {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)

    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createDeck({name, description})
        history.goBack()
    }

    const handleCancel = (event) => {
        history.push(`/`)
    }

    return (
        <div>
            <Navigation last='Create Deck'/>
            <div className="row g-3">
            <legend>Create Deck</legend>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleNameChange}
                    placeholder='Deck Name'
                    value={name}/>
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    type="text"
                    name="description"
                    onChange={handleDescriptionChange}
                    placeholder='Brief description of the deck'
                    value={description}
                    style={{width: '500px', height: '100px', marginBottom: '20px'}}/>
                <button type='submit' onClick={handleCancel} className='btn btn-primary'>Cancel</button>
                <button type='submit' onClick={handleSubmit} className='btn btn-secondary'>Submit</button>
            </form>
            </div>
        </div>
    )

}

export default CreateDeck;