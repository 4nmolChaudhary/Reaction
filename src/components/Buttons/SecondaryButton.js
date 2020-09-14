import styled, { css } from 'styled-components'

const SecondaryButton = styled.button`
    border: ${props => props.color ? '1px solid ' + props.color : " 1px solid #2b2b2b"};
    outline: none;
    font-family: ${props => props.fontFamily ? props.fontFamily : "Gilroy-Light"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 800};
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
    padding: 16px 32px;
    border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
    color: ${props => props.color ? props.color : "#2b2b2b"};
    background: none;
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
        background: ${props => props.bgColor ? props.bgColor : "#2b2b2b"};
        color: ${props => props.hoverColor ? props.hoverColor : "#fff"};
        border:none; 
    }
    &:active {
        transition: transform 100ms ease-in;
        transform: scale(0.95);
    }
    &:disabled{
        cursor:not-allowed;
        background: none;
        border:${props => props.color ? '1px solid' + props.color : " 1px solid #2b2b2b"};
        color: ${props => props.color ? props.color : "#2b2b2b"};
    }
`

export { SecondaryButton }

