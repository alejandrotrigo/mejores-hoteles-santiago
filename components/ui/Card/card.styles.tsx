import styled from "@emotion/styled";

export const CardWrapper = styled.div`
	background: #fff;      
	border: 1px solid #ddd;
	border-radius: 4px;
	color: #333;
	width: 100%;
	float: left;
	position: relative;
	margin: 0 5px;
	box-shadow: 0 2px 2px -1px rgba(0,0,0,.3);    

	&:after {
		z-index: -1; 
    position: absolute; 
    content: "";
    bottom: 10px;
    right: 4px;
    width: 80%; 
    top: 80%; 
    box-shadow: 0 12px 5px rgba(0, 0, 0, .3);
    transform: rotate(3deg);  
  } 
`;

export const CardHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

interface CardHeaderProps {
	color?: string;
}

export const CardHeaderTitle = styled.h2<CardHeaderProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 0.1rem;
	margin: 1rem 1rem;
	border-bottom: 3px solid ${(props) => props.color || '#000'};
	color: ${(props) => props.color || '#000'};
	width: 100%;
`;

export const CardHeaderPrice = styled.p`
	font-size: 2.5rem;
	font-weight: 300;
	letter-spacing: 0.1rem;
	margin: 0 1rem;
`;

export const CardHeaderTime = styled.p`
	font-size: 1rem;
	font-weight: 300;
	padding: 0;
	margin: -0.75rem 0 1rem 0;
`;
