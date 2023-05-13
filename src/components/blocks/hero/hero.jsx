import React from "react";
import { HeroContainer, HeroImageContainer, HeroText, HeroTextContainer, HeroTitle, MovieInfo, MovieInfoText } from "./styled";
import { TitleSize } from "../../ui/title/title";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Hero = ({ movie }) => {
    console.log(movie);

    return (
        <HeroContainer>
            <HeroImageContainer src={`${imgUrl}${movie?.backdrop_path}`} alt={`${movie?.name}`} />
            <HeroTextContainer>
                <HeroTitle size={TitleSize.LARGE}>{movie?.title}</HeroTitle>
                <HeroText>{movie?.overview}</HeroText>
                <MovieInfo>
                    <MovieInfoText>{movie?.duration}</MovieInfoText>
                </MovieInfo>
            </HeroTextContainer>
            
        </HeroContainer>
    );
};

export default Hero;