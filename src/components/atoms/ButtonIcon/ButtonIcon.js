import styled from "styled-components";

const ButtonIcon = styled.button`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background-image: url(${({icon}) => icon });
    background-position: 50% 50%;
    background-size: 40%;
    background-repeat: no-repeat;
    background-color: ${({ theme, active }) => ( active ? theme.lightColor : 'transparent' )};
    border: 0;
`;

export default ButtonIcon;