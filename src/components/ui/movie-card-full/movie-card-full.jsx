import React from "react";
import { Content, CountryInfo, CreditsImage, CreditsItem, CreditsList, DescriptionDetail, DescriptionTitle, DetailWrapper, Image, ImageWrapper, List, ListItem, MainInfo, MovieOverview, ProductionInfo, StyledMovieCard, SubtitleWrapper, Tagline } from "./styled";
import Title, { TitleSize } from "../title/title";
import { renderYear } from "../../../utils/utils";

const MovieCardFull = (movie) => {
    return (
        <StyledMovieCard>
            <Content>
                <ImageWrapper>
                    <Image src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt={movie.title} />
                </ImageWrapper>
                <MainInfo>
                    <Title as="h2" size={TitleSize.LARGE}>{movie.title}</Title>
                    <Tagline>{movie.tagline}</Tagline>
                    <SubtitleWrapper>
                        <DetailWrapper>
                            <DescriptionTitle>Original title:</DescriptionTitle>
                            <DescriptionDetail>{movie.original_title}</DescriptionDetail>
                        </DetailWrapper>
                        <DetailWrapper>
                            <DescriptionTitle>Rating:</DescriptionTitle>
                            <DescriptionDetail>{(movie.vote_average).toFixed(1)} / 10</DescriptionDetail>
                        </DetailWrapper>
                        <DetailWrapper>
                            <DescriptionTitle>Votes:</DescriptionTitle>
                            <DescriptionDetail>{movie.vote_count}</DescriptionDetail>
                        </DetailWrapper>
                    </SubtitleWrapper>
                    <ProductionInfo>
                        <DetailWrapper>
                            <DescriptionTitle>Year:</DescriptionTitle>
                            <DescriptionDetail>{renderYear(movie.release_date)}</DescriptionDetail>
                        </DetailWrapper>
                        <DetailWrapper>
                            <DescriptionTitle>Runtime:</DescriptionTitle>
                            <DescriptionDetail>{movie.runtime} min</DescriptionDetail>
                        </DetailWrapper>
                    </ProductionInfo>
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
                </MainInfo>
            </Content>
            <div>
                <Title size={TitleSize.MEDIUM}>Overview</Title>
                <MovieOverview>{movie.overview}</MovieOverview>
            </div>
            <div>
                <h2>Crew</h2>
                <CreditsList>
                    {movie.credits.crew.map((crew, index) => (
                        <CreditsItem key={index}>
                            <CreditsImage src={`https://image.tmdb.org/t/p/w440_and_h660_face${crew.profile_path}`} alt={crew.name} />
                            <h3>{crew.name}</h3>
                            <h4>{crew.job}</h4>
                        </CreditsItem>
                    ))}
                </CreditsList>
            </div>
            <div>
                <h2>Main Cast</h2>
                <CreditsList>
                    {movie.credits.cast.map((cast, index) => (
                        <CreditsItem key={index}>
                            <CreditsImage src={`https://image.tmdb.org/t/p/w440_and_h660_face${cast.profile_path}`} alt={cast.name} />
                            <h3>{cast.name}</h3>
                            <h4>{cast.character}</h4>
                        </CreditsItem>)
                    )}
                </CreditsList>
                
            </div>
        </StyledMovieCard>
    );
}

export default MovieCardFull;