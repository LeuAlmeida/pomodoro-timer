import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 html, body, #root {
   min-height: 100%;
 }

 body {
  background: rgb(70,75,104);
  background: linear-gradient(90deg, rgba(70,75,104,1) 0%, rgba(41,44,68,1) 100%);
   -webkit-font-smoothing: antialiased !important;
 }
`;
