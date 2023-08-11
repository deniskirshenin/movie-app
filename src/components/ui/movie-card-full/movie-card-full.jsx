import React from "react";
import { Content, CountryInfo, CreditsDescription, CreditsDetail, CreditsDetailList, CreditsImage, CreditsItem, CreditsList, DescriptionDetail, DescriptionTitle, DetailWrapper, Image, ImageWrapper, List, ListItem, MainContent, MainInfo, MovieOverview, StyledMovieCard, StyledTitle, Subtitle, SubtitleWrapper, Tagline, TextContent } from "./styled";
import { TitleSize } from "../title/title";
import { renderYear } from "../../../utils/utils";
import noImage from "../../../assets/no-image.png";
import MovieCard from "../movie-card/movie-card";

const MovieCardFull = (movie) => {
    return (
        <StyledMovieCard>
            <MainContent>
                <ImageWrapper>
                    <Image src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt={movie.title} />
                </ImageWrapper>
                <MainInfo>
                    <StyledTitle as="h2" size={TitleSize.LARGE}>{movie.title}</StyledTitle>
                    <Subtitle>{movie.original_title}</Subtitle>
                    {movie.tagline && <Tagline>{movie.tagline}</Tagline>}
                    <SubtitleWrapper>
                        <DetailWrapper>
                            <DescriptionTitle>Rating:</DescriptionTitle>
                            <DescriptionDetail>{(movie.vote_average).toFixed(1)} / 10</DescriptionDetail>
                        </DetailWrapper>
                        <DetailWrapper>
                            <DescriptionTitle>Votes:</DescriptionTitle>
                            <DescriptionDetail>{movie.vote_count}</DescriptionDetail>
                        </DetailWrapper>
                        <DetailWrapper>
                            <DescriptionTitle>Year:</DescriptionTitle>
                            <DescriptionDetail>{renderYear(movie.release_date)}</DescriptionDetail>
                        </DetailWrapper>
                        <DetailWrapper>
                            <DescriptionTitle>Runtime:</DescriptionTitle>
                            <DescriptionDetail>{movie.runtime} min</DescriptionDetail>
                        </DetailWrapper>
                    </SubtitleWrapper>
                    <CountryInfo>
                        <DetailWrapper>
                            <DescriptionTitle>Country of origin:</DescriptionTitle>
                            <DescriptionDetail>
                                <List>
                                    {movie.production_countries.map((country, index) => (
                                        <ListItem key={index}>
                                            {country.name}
                                        </ListItem>
                                    ))}
                                </List>
                            </DescriptionDetail>     
                        </DetailWrapper>
                    </CountryInfo>
                    <DetailWrapper>
                        <DescriptionTitle>Genre:</DescriptionTitle>
                        <DescriptionDetail>
                            <List>
                                {movie.genres.map(genre => <ListItem key={genre.id}>{genre.name}</ListItem>)}
                            </List>
                        </DescriptionDetail>
                    </DetailWrapper>
                    <DetailWrapper>
                        <DescriptionTitle>Language:</DescriptionTitle>
                        <DescriptionDetail>
                            <List>
                                {movie.spoken_languages.map((language, index) => (
                                    <ListItem key={index}>
                                        {language.english_name}
                                    </ListItem>
                                ))}
                            </List>
                        </DescriptionDetail>
                    </DetailWrapper>
                    <TextContent>
                        <StyledTitle as="h3" size={TitleSize.MEDIUM}>Overview</StyledTitle>
                        <MovieOverview>{movie.overview}</MovieOverview>
                    </TextContent>
                </MainInfo>
            </MainContent>
            <Content>
                <StyledTitle as="h3" size={TitleSize.MEDIUM}>Crew</StyledTitle>
                <CreditsList>
                    {movie.credits.crew.map((crew, index) => (
                        <CreditsItem key={index}>
                            {crew.profile_path !== null ? 
                                (<CreditsImage src={`https://image.tmdb.org/t/p/w440_and_h660_face${crew.profile_path}`} alt={crew.name} />) : (
                                    <CreditsImage
                                    src={noImage}
                                    alt={crew.name}
                                    />)}
                            <CreditsDetailList>
                                <CreditsDetail>{crew.name}</CreditsDetail>
                                <CreditsDescription>{crew.job}</CreditsDescription>
                            </CreditsDetailList>
                        </CreditsItem>
                    ))}
                </CreditsList>
            </Content>
            <Content>
                <StyledTitle as="h3" size={TitleSize.MEDIUM}>Main Cast</StyledTitle>
                <CreditsList>
                    {movie.credits.cast.map((cast, index) => (
                        <CreditsItem key={index}>
                            {cast.profile_path !== null ? 
                                (<CreditsImage src={`https://image.tmdb.org/t/p/w440_and_h660_face${cast.profile_path}`} alt={cast.name} />) : (
                                    <CreditsImage
                                    src={noImage}
                                    alt={cast.name}
                                    />)}
                            <CreditsDetailList>
                                <CreditsDetail>{cast.name}</CreditsDetail>
                                <CreditsDescription>{cast.character}</CreditsDescription>
                            </CreditsDetailList>
                        </CreditsItem>)
                    )}
                </CreditsList>
            </Content>
            <Content>
                <StyledTitle as="h3" size={TitleSize.MEDIUM}>Recommendations</StyledTitle>
                <CreditsList>
                    {movie.similar.results.map((similar, index) => (
                        <MovieCard key={index} {...similar}/>
                        )
                    )}
                </CreditsList>
            </Content>
        </StyledMovieCard>
    );
}

export default MovieCardFull;