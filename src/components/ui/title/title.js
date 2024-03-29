import { css, styled } from "styled-components";

export const TitleSize = {
    LARGE: "large",
    MEDIUM: "medium",
    SMALL: "small"
};

const TitleSizeValue = {
    [TitleSize.LARGE]: {
        fontSize: "32px",
        lineHeight: "36px",
        fontWeight: 400
    },
    [TitleSize.MEDIUM]: {
        fontSize: "25px",
        lineHeight: "25px",
        fontWeight: 800
    },
    [TitleSize.SMALL]: {
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: 500
    }
};

const Title = styled.h1`
    padding: 16px 16px 0 16px;
    margin: 0;
    color: #fff;
    ${(props) => {
        const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
        return css`
            font-size: ${values.fontSize};
            line-height: ${values.lineHeight};
            font-weight: ${values.fontWeight};
        `;
    }}

    @media (min-width: 768px) {
        padding: 25px 25px 0 25px;
    }

    @media (min-width: 1200px) {
        padding: 32px 36px 0 36px;
    }
`;

export default Title;