// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #0F294A;
height: 85px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #F05636;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
 color: #F05636;
}
`;

// export const Bars = styled(FaBars)`
// display: none;
// color: #808080;
// @media screen and (max-width: 768px) {
//  display: block;
//  position: absolute;
//  top: 0;
//  right: 0;
//  transform: translate(-100%, 75%);
//  font-size: 1.8rem;
//  cursor: pointer;
// }
// `;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
 display: none;
}
`;
