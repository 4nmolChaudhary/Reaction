import styled from 'styled-components'
import React from 'react';

const Container = styled.label`
    cursor: pointer;
    position:relative;
`
const Input = styled.input.attrs({ type: 'checkbox' })`
    opacity: 0;
    cursor: pointer;
    position:absolute;
    z-index:4;
    width: ${props => props.size ? props.size : 24}px;
	height: ${props => props.size ? props.size / 2 : 12}px;
    &:checked + label{
	    background: ${props => props.toggleOnColor ? props.toggleOnColor : "#2b2b2b"};
    }
    &:checked + label:after{
	    left: calc(100% -5px);
	    transform: translateX(104%);
    }
`
const Label = styled.label`
    width: ${props => props.size ? props.size : 24}px;
	height: ${props => props.size ? props.size / 2 : 12}px;
	background: ${props => props.toggleOffColor ? props.toggleOffColor : "#dedede"};
	display: block;
	border-radius: ${props => props.size ? props.size : 24}px;
	position: relative;
    &::after{
        content: '';
        position: absolute;
        top:${props => props.size ? props.size / 100 : 12 / 100}px;
        left:${props => props.size ? props.size / 100 : 12 / 100}px;
        width: ${props => props.size ? props.size / 2 * 0.96 : 12 * 0.96}px;
	    height: ${props => props.size ? props.size / 2 * 0.96 : 12 * 0.96}px;
        border-radius: ${props => props.size ? props.size : 24}px;
        background: ${props => props.switchColor ? props.switchColor : "#fff"};
        transition: 500ms;
    }
`

function Toggle({ size, onChange, defaultChecked, toggleOnColor, toggleOffColor, switchColor, isChecked }) {
    return (
        <Container size={size}>
            <Input size={size} defaultChecked={defaultChecked} onChange={onChange} toggleOnColor={toggleOnColor} checked={isChecked} />
            <Label size={size} toggleOffColor={toggleOffColor} switchColor={switchColor} />
        </Container>
    )
}

export { Toggle }
