// import React, { useEffect, useState } from "react";
// import { StyledMoviesPage } from "./styled";
// import Movies from "../../blocks/movies/movies";
// import { fetchPopularMovies } from "../../../actions/popularMovies";
// import { connect } from "react-redux";

// const MoviesPage = ({ data, loading, currentPage, totalPages, apiKey, dispatch }) => {
//     const [isFetching, setIsFetching] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (
//                 window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200 &&
//                 !isFetching
//             ) {
//                 setIsFetching(true);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [isFetching]);

//     useEffect(() => {
//         if (isFetching && currentPage < totalPages && !loading) {
//             dispatch(fetchPopularMovies(apiKey, currentPage + 1));
//             setIsFetching(false);
//         }
//     }, [isFetching, currentPage, totalPages, loading, apiKey, dispatch]);

//     return (
//         <StyledMoviesPage>
//             <Movies shows={data} title="Movies" />
//         </StyledMoviesPage>
//     );
// };

// const mapStateToProps = (state) => ({
//     data: state.popularMovies.data, // Use data instead of loading
//     loading: state.popularMovies.loading,
//     currentPage: state.popularMovies.currentPage,
//     totalPages: state.popularMovies.totalPages,
// });

// export default connect(mapStateToProps)(MoviesPage);
