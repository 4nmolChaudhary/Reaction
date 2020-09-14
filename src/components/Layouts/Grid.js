import styled from 'styled-components'

const Grid = styled.div`
    display:grid;
    width:100%;
    gap:${({ rowGap }) => rowGap ? rowGap : 0}px;
    box-sizing:border-box;
`

const Row = styled.div`
    display:grid;
    grid-template-columns:repeat(12,1fr);
    gap:${({ colGap }) => colGap ? colGap : 0}px;
`
const Column = styled.div`
    width:inherit;
    grid-column-start:${({ start }) => start ? start : 0};
    grid-column-end:${({ end }) => end ? end : 12};
`

export { Row, Column, Grid }