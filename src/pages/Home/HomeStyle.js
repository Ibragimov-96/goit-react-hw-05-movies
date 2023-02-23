import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TopList = styled.ol`
  display: flex;
  flex-wrap: wrap;

  gap: 15px;
`;
export const Header = styled.h1`
display: flex;
    justify-content: center;
    font-weight: 900;
    
`;
export const LinkFilms = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: black;
  text-decoration: none;
  font-weight: 700;
  gap: 15px;
  font-size: 20px;
`;
