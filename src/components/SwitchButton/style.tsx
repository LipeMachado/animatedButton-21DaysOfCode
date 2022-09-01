import styled from 'styled-components';

export const BackgroundDiv = styled.div`
    background-color: ${props => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: all 0.3s ease-in-out;
    color: ${props => props.theme.colors.color};
`;

export const BackgroundBoxDiv = styled.div`
    display: block;
    justify-content: center;
`;

export const SwitchButtonBoxDiv = styled.div`
    
`;

