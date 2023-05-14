import React, { useEffect, useState } from "react";
import { SearchContainer, SearchIcon, SearchInput } from "./styled";
import { Navigate } from "react-router-dom";

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('')
    const [shows, setShows] = useState([]);

    const getShows = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=add8c0cdbdcd6f1026ba6df9d6cef47d&query=${searchValue}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setShows(responseJson.results);
		}
	};

    useEffect(() => {
    getShows(searchValue);
    }, [searchValue]);

    const handleChange = (evt) => {
        setSearchValue(evt.target.value);
    };

    const searchPageData = {
        title: `Found ${shows.length} results for ${searchValue}`, 
        shows: shows
    }

    return (
        <>
            <SearchContainer>
            <SearchIcon />
            <SearchInput 
                value={searchValue}
                placeholder="Search for movies or TV series"
                onChange={handleChange}
            />
            </SearchContainer>
            {(searchValue.length > 0) && (<Navigate to="/search" state={searchPageData} replace={true} />)}     
        </>
    );
};

export default SearchBox;