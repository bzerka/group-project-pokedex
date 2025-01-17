import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #015e82;
  /* display: grid; */
  /* grid-template-columns:  repeat(  3, 400px );
  grid-template-rows: 113px repeat(  8, 1fr ); */
  width: 100%;
  height: 100%;
  min-height: 95.5vh;
  flex-direction: column;
  padding-bottom: 30px;
/* padding-top: 15%; */

 
  h2 {
    display: grid;
    /* grid-column: 1/4; */
    padding: 20px;
    color: #eff6f9;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
    margin: 0 0 25px 0;
    /* text-align: center; */
  }

  @media screen and (max-width: 480px) {
padding-bottom:20px; 
  }
`;
