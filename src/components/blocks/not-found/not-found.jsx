import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { NotFoundContainer } from "./styled";


const NotFound = ({title}) => {
    return (
        <NotFoundContainer>
            <Title as="h3" size={TitleSize.SMALL}>{title}</Title>
        </NotFoundContainer>
    );
};

export default NotFound;