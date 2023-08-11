import { styled } from "styled-components";
import Title from "../title/title";

export const StyledMovieCard = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #191b26;
    color: #fff;

    @media (min-width: 768px) {
        padding: 25px;
    }

    @media (min-width: 1200px) {
        padding: 32px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 20px;
        padding: 0 0 20px 0;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 6px;

    @media (min-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
    }
`;

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 6px;

    @media (min-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0 0 0;

    @media (min-width: 768px) {
        padding: 0;
    }
`;

export const Image = styled.img`
    width: 220px;
    height: 330px;
    object-fit: cover;

    @media (min-width: 768px) {
        grid-column: 1 / 2;

        width: 300px;
        height: auto;
    }

    @media (min-width: 1200px) {
        width: 420px;
    }
`;

export const SubtitleWrapper = styled.dl`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 0;
    padding: 0 16px;

    @media (min-width: 768px) {
        padding: 0;
    }
`;

export const StyledTitle = styled(Title)`
    font-size: 22px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 25px;
        padding: 0;
        text-align: left;
    }

    @media (min-width: 1200px) {
        font-size: 35px;
    }
`;

export const Subtitle = styled(Title)`
    font-size: 16px;
    opacity: 0.75;
    padding: 0;

    @media (min-width: 768px) {
        font-size: 18px;
    }

    @media (min-width: 1200px) {
        font-size: 21px;
    }
`;

export const Tagline = styled.p`
    font-size: 14px;
    font-weight: 300;
    opacity: 0.75;
    text-align: center;
    margin: 0;
    padding: 0 16px;

    @media (min-width: 768px) {
        font-size: 16px;
        text-align: left;
        padding: 0;
    }

    @media (min-width: 1200px) {
        font-size: 18px;
    }
`;

export const DetailWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

export const DescriptionTitle = styled.dt`
    font-size: 10px;
    opacity: 0.75;

    @media (min-width: 768px) {
        font-size: 12px;
    }

    @media (min-width: 1200px) {
        font-size: 14px;
    }
`;

export const DescriptionDetail = styled.dd`
    font-size: 10px;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 12px;
    }

    @media (min-width: 1200px) {
        font-size: 14px;
    }
`;

export const CountryInfo = styled.dl`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
    margin: 0;

    @media (min-width: 768px) {
        padding: 0;
    }
`;

export const List = styled.ul`
    display: flex;
    gap: 5px;
`;

export const ListItem = styled.li`
    padding: 0;
`;

export const MovieOverview = styled.p`
    margin: 0;
    padding: 16px;
    font-size: 16px;
    font-weight: 300;

    @media (min-width: 768px) {
        font-size: 18px;
        padding: 0;
    }

    @media (min-width: 768px) {
        font-size: 22px;
        padding: 0;
    }
`;

export const CreditsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-auto-flow: column;
    padding: 16px;
    overflow: scroll;
    gap: 10px;

    @media (min-width: 768px) {
        padding: 20px 0;
    }
`;

export const CreditsItem = styled.li`
    display: flex;
    gap: 5px;
    width: 250px;
`;

export const CreditsDetailList = styled.dl`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin: 0;

    gap: 5px;
`;

export const CreditsDetail = styled.dt`
    font-size: 10px;
    margin: 0;
`;

export const CreditsDescription = styled.dd`
    font-size: 10px;
    opacity: 0.75;
    margin: 0;
`;

export const CreditsImage = styled.img`
    width: 40px;
    height: 60px;
`;