import styled from 'styled-components';
import { Link,} from 'react-router-dom';
export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
`;
export const Btn = styled.button`
  padding: 10px;
  background-color: #7b2ec7;
  color: white;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  &:hover {
    background-color: #f9f529;
    color: rgb(3, 3, 3);
  }
`;
export const Form = styled.form`
margin-top:20px;
display: flex;
gap: 15px;
margin-left:20px;`
export const LinkFilm = styled(Link)`
text-decoration:none;
font-size:19px;
font-weight:bold;
color:black` 

export const Films = styled.ul`
flex-wrap:wrap;
display: flex;
gap: 15px;
`

