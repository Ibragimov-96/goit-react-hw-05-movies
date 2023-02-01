import styled from 'styled-components';
import {NavLink,Link } from 'react-router-dom';
export const ListFilms = styled.li`
display:flex;
gap:25px;`

export const BtnBack = styled(Link)`
background-color: #6a6aeb;
display: grid;
margin: 20px;
width: 100px;
padding: 10px;
justify-content: center;
padding:3px;
text-decoration: none;
border-radius: 5px;
color: white;
font-size:18px;
`
export const Datails = styled.ul`
display: flex;
gap: 20px;
`

export const BtnNav = styled(NavLink)`
background-color: #6a6aeb;
display: grid;
margin: 20px;
width: 100px;
padding: 10px;
justify-content: center;
padding:3px;
text-decoration: none;
border-radius: 5px;
color: white;
font-size:18px;
&.active{
    background-color: #f9f529;
    color: black;
}
`