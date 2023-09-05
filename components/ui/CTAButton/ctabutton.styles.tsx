import styled from "@emotion/styled";

export const CTAButtonStytled = styled('button')`

width: 12rem;
height: 2.5rem;
margin: 0 1.5rem 3rem 1.5rem;
border: 1px solid #ddd;
background-color: #006ce4;
color: white;

font-weight: 400;
font-family: Bebas Neue, serif;
letter-spacing: 0.15rem;
font-size: 1.05rem;
padding: 0.5rem 0.5rem;

cursor: pointer;

transition: all 0.3s ease-in-out;

&:hover {
	background-color: #035fdf;
	color: #fff;
}

&:hover:disabled {
	background-color: rgb(34,193,195, 0.35);
	box-shadow: none;
	cursor: not-allowed;
}
`;