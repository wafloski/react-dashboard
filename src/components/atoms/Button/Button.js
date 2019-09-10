import styled, { css } from "styled-components";

const Button  = styled.button`
    padding: 0;
    background-color: ${({theme}) => theme.primary};
    width: 220px;
    height: 48px;
    border-radius: 48px;
    font-size: 16px;
    border: 0;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Poppins',sans-serif;
    
    ${({secondary}) => (
        secondary && css`
            background-color: #e6e6e6;
            width: 110px;
            height: 32px;
            font-size: 12px;
        `
    )}     
`;

export default Button;