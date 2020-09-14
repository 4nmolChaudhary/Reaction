import styled from 'styled-components'

export const Font = styled.span`
    font-family: ${props => props.fontFamily ? props.fontFamily : "Gilroy-Light"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 100};
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
    color: ${props => props.color ? props.color : "#2b2b2b"};
    padding: ${props => props.fontSize ? props.fontSize / 2 + 'px ' : '16px'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
    background: ${props => props.backDrop ? props.backDrop : "none"};
`
