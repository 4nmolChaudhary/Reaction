import styled from 'styled-components'
import React from 'react';

const Input = styled.input.attrs({ type: 'checkbox' })`
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`
const Container = styled.label`
    cursor: pointer;
    &:hover input ~ span {
        background: ${props => props.hoverBg ? props.hoverBg : "#ededed"};
    }
    input:checked ~ span {
        background: ${props => props.bgOnCheck ? props.bgOnCheck : "#2b2b2b"};;
    }
    input:checked ~ span svg {
        visibility:visible;
    }
`
const Checkmark = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.size ? props.size : 18}px;
    width: ${props => props.size ? props.size : 18}px;
    background-color: ${props => props.bgColor ? props.bgColor : "#dedede"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
    
    svg{
        height: ${props => props.size ? props.size / 2 : 9}px;
        width: ${props => props.size ? props.size / 2 : 9}px;
        fill: ${props => props.checkmarkColor ? props.checkmarkColor : "#fff"};
        visibility:hidden;
    }
`;

function CheckBox({ borderRadius, hoverBg, size, bgColor, bgOnCheck, checkmarkColor, onChange, defaultChecked }) {
    return (
        <Container hoverBg={hoverBg} bgOnCheck={bgOnCheck}>
            <Input defaultChecked={defaultChecked} onChange={onChange} />
            <Checkmark borderRadius={borderRadius} size={size} bgColor={bgColor} checkmarkColor={checkmarkColor} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
            </Checkmark>
        </Container>
    )
}

export { CheckBox }