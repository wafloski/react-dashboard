import styled, { css } from "styled-components";
import magnifierIcon from "assets/icons/magnifier.svg"

const Input = styled.input`
    padding: 15px 30px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    background-color: ${({ theme }) => theme.lightColor};
    border: 0;
    border-radius: 50px;
    font-family: ${({ theme }) => theme.fontFamily};
  
    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #bbb;
    }
  
    ${({search}) =>
        search && css`
            padding: 10px 20px 10px 40px;
            font-size: ${({theme}) => theme.fontSize.xs};
            background-image: url(${() => magnifierIcon});
            background-size: 15px;
            background-position: 15px 50%;
            background-repeat: no-repeat;
        `
    }
`;

export default Input;