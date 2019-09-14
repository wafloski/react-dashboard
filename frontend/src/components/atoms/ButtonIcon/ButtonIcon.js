import styled from "styled-components";

const ButtonIcon = styled.button`
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background-image: url(${({icon}) => icon });
    background-position: 50% 50%;
    background-size: 40%;
    background-repeat: no-repeat;
    border: 0;
    cursor: pointer;
    transition: ${({theme}) => theme.hoverTransitionTime};
    
    &.active {
        background-color: ${({theme}) => theme.lightColor};
    }
    
    :hover {
        opacity: ${({theme}) => theme.hoverOpacity};
    }
`;

export default ButtonIcon;