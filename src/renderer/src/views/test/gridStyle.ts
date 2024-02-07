import { styled } from 'styled-components'

export const GridWrapper = styled.div`
  display: grid;
  /* width: 500px;
  height: 400px; */
  border: 1px solid #000;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(4, 100px);
  /* grid-auto-flow: row dense; */
  /* grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px); */
  /* grid-column-gap: 10px;
  grid-row-gap: 10px; */
  /* grid-gap: 10px 20px; */
  /* gap: 10px 20px; */
  /* grid-template-areas:
    'a a a'
    'b b b'
    'c c c'; */
  /* grid-auto-flow: column; */
  .grid1 {
    background-color: red;
    grid-column: 1 / 3;
    /* grid-area: a; */
  }
  .grid2 {
    background-color: skyblue;
    grid-column: 1 / 3;
    /* grid-area: b; */
  }
  .grid3 {
    background-color: yellow;
    /* grid-area: c; */
  }
  .grid4 {
    background-color: greenyellow;
  }
  .grid5 {
    background-color: purple;
  }
  .grid6 {
    background-color: pink;
  }
  .grid7 {
    background-color: gray;
  }
  .grid8 {
    background-color: orange;
  }
  .grid9 {
    background-color: peachpuff;
  }
`
