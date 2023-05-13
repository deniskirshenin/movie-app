import { useLocation } from "react-router-dom";
import Movies from "../../blocks/movies/movies";
import { StyledSearchPage } from "./styled";

const SearchPage = () => {
    const location = useLocation();
    const propsData = location.state;

    return (
        <StyledSearchPage>
            <Movies shows={propsData.shows} title={propsData.title}/>
        </StyledSearchPage>
    );
};

export default SearchPage;