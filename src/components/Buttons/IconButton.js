import styled from 'styled-components'

const IconButton = styled.button`
    border: none;
    outline: none;
    padding: 16px;
    color: ${props => props.color ? props.color : "#2B2B2B"};
    background: ${props => props.bgColor ? props.bgColor : 'none'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
    box-shadow: ${props => props.shadow ? props.bgColor ? '0 18px 48px ' + props.bgColor + '60' : "0 18px 48px #2b2b2b60" : 'none'};
    svg{
        width: ${props => props.size ? props.size : 16}px;
        height: ${props => props.size ? props.size : 16}px;
    }
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

export { IconButton }

