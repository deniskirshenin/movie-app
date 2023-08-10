import { styled } from "styled-components";

export const StyledMovieCard = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #191b26;
    color: #fff;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0 0 0;
`;

export const Image = styled.img`
    width: 220px;
    height: 330px;
    object-fit: cover;
`;

export const SubtitleWrapper = styled.dl`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
`;

export const Tagline = styled.p`
    font-size: 14px;
    opacity: 0.75;
    text-align: center;
    margin: 0;
    padding: 16px;
`;

export const DetailWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const DescriptionTitle = styled.dt`
    font-size: 12px;
    opacity: 0.75;
`;

export const DescriptionDetail = styled.dd`
    font-size: 12px;
    margin: 0;
`;

export const ProductionInfo = styled.dl`
    display: flex;
    gap: 10px;

    margin: 0 auto;
`;

export const CountryInfo = styled.dl`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
    margin: 0;
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
`;

export const CreditsList = styled.ul`
    display: flex;
    overflow: scroll;
`;

export const CreditsItem = styled.li`
    width: 250px;
`;

export const CreditsImage = styled.img`
    width: 40px;
    height: 60px;
`;