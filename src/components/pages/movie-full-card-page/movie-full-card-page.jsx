import MovieCardFull from "../../ui/movie-card-full/movie-card-full"
import { MoviePage } from "./styled";
import { TryAgain } from "../lucky-page/styled";
import { useGetMovieQuery } from "../../../features/api/apiSlice";
import { useParams } from "react-router-dom";

const MovieFullCardPage = () => {
    const { movieID } = useParams();

    const { data: movie, isFetching, isSuccess, isError } = useGetMovieQuery(movieID);

    let content;

    if(isFetching) {
        content = <h1>Loading...</h1>;
    } else if(isSuccess) {
        content = <MovieCardFull key={movie.id} {...movie} />
    } else if(isError) {
        content = (<TryAgain>
        <h2>Try again</h2>
        </TryAgain>)
    }

    return (
        <MoviePage>
            {content}
        </MoviePage>
    );
}

export default MovieFullCardPage;