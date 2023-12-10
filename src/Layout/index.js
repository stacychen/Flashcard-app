import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import DeckDetails from "../Decks/DeckDetails";
import EditDeck from "../Decks/EditDeck";
import CreateDeck from "../Decks/CreateDeck";
import AddCard from "../Cards/AddCard"
import EditCard from "../Cards/EditCard";
import Home from "../Home/Home"
import StudyDeckView from "../Decks/Study/StudyDeckView";

function Layout() {

    return (
    <>
        <Header />
        <div className="container">
        {/* TODO: Implement the screen starting here */}
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path="/decks/new">
                    <CreateDeck  />
                </Route>
                <Route exact path="/decks/:deckId">
                    <DeckDetails />
                </Route>
                <Route exact path="/decks/:deckId/edit">
                    <EditDeck />
                </Route>
                <Route exact path="/decks/:deckId/study">
                    <StudyDeckView />
                </Route>
                <Route exact path="/decks/:deckId/cards/new">
                    <AddCard />
                </Route>
                <Route exact path="/decks/:deckId/cards/:cardId/edit">
                    <EditCard />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    </>
  );
}

export default Layout;
