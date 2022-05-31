import styled from "styled-components";

export const  CustomInput  = styled.input`
background-color:#ffff;
border:1px solid rgba(59,187,160,1);
font-size:18px;
box-shadow:none;
color:#000;
font-weight:bold;
outline:0;
height:48px;
border-radius:4px;
padding-left:20px;
&::placeholder{
  color:#404145;
  font-weight:bold;
}
`;