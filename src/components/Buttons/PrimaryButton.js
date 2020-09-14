import styled, { css } from 'styled-components'

const PrimaryButton = styled.button`
    border: none;
    outline: none;
    font-family: ${props => props.fontFamily ? props.fontFamily : "Gilroy-Light"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 800};
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
    padding: 16px 32px;
    border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
    color: ${props => props.color ? props.color : "#fff"};
    background: ${props => props.bgColor ? props.bgColor : "#2b2b2b"};
    box-shadow: ${props => props.shadow ? props.bgColor ? '0 18px 48px ' + props.bgColor + '60' : "0 18px 48px #2b2b2b60" : 'none'};
    display:flex;
    align-items:center;
    svg{
        font-size: ${props => props.fontSize ? props.fontSize : 16}px;
        margin-left:8px;
    }
    ${props => props.iconRight && css`flex-direction:row; svg{margin:0 0 0 8px}`}
    ${props => props.iconLeft && css`flex-direction:row-reverse; svg{margin:0 8px 0 0}`}
    
    &:hover{
        cursor: pointer; 
    }
    &:active {
        transition: transform 100ms ease-in;
        transform: scale(0.95);
    }
    &:disabled{
        cursor:not-allowed;
        background: ${props => props.bgColor ? props.bgColor + '70' : "#2b2b2b70"}; 
    }
`

export { PrimaryButton }

