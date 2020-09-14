import styled from 'styled-components'

const TextBox = styled.input`
    border: none;
    outline: none;
    padding: 16px;
    box-sizing:border-box;
    font-family: ${props => props.fontFamily ? props.fontFamily : "Gilroy-Light"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 800};
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
    border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
    color: ${props => props.color ? props.color : "#2b2b2b"};
    width:${props => props.fullWidth ? "100%" : "50%"};
    background: ${props => props.bgColor ? props.bgColor : "#efefef"};
    &:focus {
        border: ${props => props.bgColor ? '1px solid ' + props.bgColor + '26' : " 1px solid #2b2b2b26"};
    }
    &:disabled{
        cursor:not-allowed;
    }
`
export { TextBox }