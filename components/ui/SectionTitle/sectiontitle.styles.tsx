import styled from "@emotion/styled";

export const SectionTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

interface Props {
	color?: string;
}

export const SectionTitleMain = styled.h3<Props>`
	font-size: 2.5rem;
	font-weight: 600;
	letter-spacing: 1rem;
	margin-bottom: 1rem;
	text-transform: uppercase;
	color: ${(props) => props.color || "#000"};
`;