import { css, styled } from "styled-components";

export const TitleSize = {
    LARGE: "large",
    MEDIUM: "medium",
    SMALL: "small"
};

const TitleSizeValue = {
    [TitleSize.LARGE]: {
        fontSize: "40px",
        lineHeight: "60px",
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
    padding: 0;
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
`;

export default Title;