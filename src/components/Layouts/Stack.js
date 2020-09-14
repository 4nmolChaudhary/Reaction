import styled from 'styled-components'

const Stack = styled.div`
    display:flex;
    width:${({ fullWidth }) => fullWidth && '100%'};
    justify-content:${({ justify }) => justify ? justify : 'center'};
    align-items:${({ items }) => items ? items : 'center'};
    flex-direction:${({ direction }) => direction ? direction : 'row'};
    padding:${({ padding }) => padding ? padding : 0}px;
    *{
        margin:${({ gap }) => gap ? gap / 2 : 0}px;
    }

`

export { Stack }