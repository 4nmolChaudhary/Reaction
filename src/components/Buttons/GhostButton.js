import styled from 'styled-components'

const GhostButton = styled.button`
    border: none;
    outline: none;
    font-family: ${props => props.fontFamily ? props.fontFamily : "Gilroy-Light"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 800};
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
    padding: 16px 32px;
    color: ${props => props.color ? props.color : "#000"};
    background: none;
    &:hover{
        cursor: pointer;
        background-color: ${props => props.color ? props.color + '25' : "#2b2b2b25"}; 
    }
    &:active {
        transition: transform 100ms ease-in;
        transform: scale(0.95);
    }
    &:disabled{
        cursor:not-allowed; 
    }
`

export { GhostButton }

