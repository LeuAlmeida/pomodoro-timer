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

   font-family: 'Roboto', sans-serif;
   color: #9ca1bc;
   font-weight: 100;
 }

 body {
  max-width: 500px;
  margin: 0 auto;

  background: rgb(70,75,104);
  background: linear-gradient(90deg, rgba(70,75,104,1) 0%, rgba(41,44,68,1) 100%);
   -webkit-font-smoothing: antialiased !important;
 }

 button {
   background: transparent;
   cursor: pointer;
   border: 0;
   transition: opacity 0.3s;

   display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: inset 1px 2px #ffffff0a, -4px -4px 20px -5px #ffffff38, 2px 2px 20px #00000078;

   &:hover {
     opacity: 0.8;
   }
 }
 
`;
