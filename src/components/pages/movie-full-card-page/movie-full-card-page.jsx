import MovieCardFull from "../../ui/movie-card-full/movie-card-full"
import { URL } from "../../../api/api";

import useSWR from "swr";
import { API_KEY } from "../../../api/api_key";
import { MoviePage } from "./styled";
import { TryAgain } from "../lucky-page/styled";
import { useParams } from "react-router-dom";

const MovieFullCardPage = () => {
    const { movieID } = useParams();
    const movieCard = `/movie/${movieID}?`;
    const url = URL + movieCard + API_KEY + '&append_to_response=credits,videos,similar,watch/providers';
    const { data: movie, error } = useSWR(url);

    if(error) return <h1>Something went wrong</h1>;
    if(!movie) return <h1>Loading...</h1>;

    return (
        <MoviePage>
            {movie.id ? (
                <MovieCardFull key={movie.id} {...movie} />
            ) : (
                <TryAgain>
                    <h2>Try again</h2>
                </TryAgain>
            )}
        </MoviePage>
        
    );
}

export default MovieFullCardPage;