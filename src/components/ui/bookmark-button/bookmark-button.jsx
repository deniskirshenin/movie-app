import React from "react";
import { StyledBookmarkButton } from "./styled";
import {ReactComponent as BookmarkIcon} from "/Users/fish/movie-app/src/assets/icon-bookmark-empty.svg";

const BookmarkButton = () => {
    return (
        <StyledBookmarkButton>
            <BookmarkIcon />
        </StyledBookmarkButton>
    );
};

export default BookmarkButton;