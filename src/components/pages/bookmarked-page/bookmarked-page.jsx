import React, { useContext } from "react";
import Movies from "../../blocks/movies/movies";
import { StyledBookmarkPage } from "./styled";
import { GlobalContext } from "../../../context/GlobalState";
import NotFound from "../../blocks/not-found/not-found";

const BookmarkPage = () => {
    const {watchlist} = useContext(GlobalContext);

    return (
        <StyledBookmarkPage>
            {watchlist.length > 0 ? (
                <Movies shows={watchlist} title="Favourites" type={watchlist}/>
            ) : (
                <NotFound title="Nothing added yet" />
            )}
        </StyledBookmarkPage>
    );
};

export default BookmarkPage;