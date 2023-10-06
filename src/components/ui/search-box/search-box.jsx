import React, { useState } from "react";
import { SearchButton, SearchContainer, SearchIcon, SearchInput } from "./styled";
import useSWR from "swr";
import { fetcher } from "../../..";

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('')

    const url = `https://api.themoviedb.org/3/search/movie?api_key=add8c0cdbdcd6f1026ba6df9d6cef47d&query=${searchValue}`

    const handleChange = (evt) => {
        setSearchValue(evt.target.value);
    };

    const { data: shows, error } = useSWR(
        searchValue ? url : null,
        fetcher,
    )

    console.log(shows);

    const results = shows?.results || [];

    const searchPageData = {
        title: `Found ${results.length} results for ${searchValue}`, 
        shows: results || []
    }

    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput 
                value={searchValue}
                placeholder="Search for movies or TV series"
                onChange={handleChange}
            />
            {(searchValue.length > 0) && (<SearchButton to="/search" state={searchPageData}>Search</SearchButton>)}
        </SearchContainer>
    );
};

export default SearchBox;