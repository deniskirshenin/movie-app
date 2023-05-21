import React from "react";
import { MoviesTitle } from "../trending-movies/styled";
import { TitleSize } from "../../ui/title/title";
import { NotFoundContainer } from "./styled";


const NotFound = ({title}) => {
    return (
        <NotFoundContainer>
            <MoviesTitle as="h3" size={TitleSize.SMALL}>{title}</MoviesTitle>
        </NotFoundContainer>
    );
};

export default NotFound;