import styled from "@emotion/styled";

export const ContactFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 100%;
`;

export const ContactFormData = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;

	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
		margin-right: 1rem;
	}
`;

export const FormData = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem 2rem;
	width: 100%;
	
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ContactFormLabel = styled.label`
	font-weight: 600;
	font-size: 0.95rem;
	color: #666;
	line-height: 1rem;
	width: 100%;

	& span {
		color: red;
	}
`;

export const ContactFormInput = styled.input`
	width: 100%;
	height: 2.5rem;
	margin: 0 0;
	border: 1px solid #ddd;
	font-family: Old Standard TT, serif;

	&:hover {
		border: 1px solid #b8cada;
	}

	&:focus-visible {
		border: 1px solid #b8cada;
	}

	@media (max-width: 768px) {
		width: 90%;
		margin: 0 1rem 0 0;
`;

export const ContactFormTextArea = styled.textarea`
	width: 100%;
	height: 5rem;
	margin: 0 0;
	border: 1px solid #ddd;
	resize: none;
	font-family: Old Standard TT, serif;

	&:hover {
		border: 1px solid #b8cada;
	}

	&:focus-visible {
		border: 1px solid #b8cada;
	}

	@media (max-width: 768px) {
		width: 90%;
		margin: 0 1rem 0 0;
	}
`;

export const ContactFormButton = styled.input`
	width: 10rem;
	height: 2.5rem;
	margin: 0 0 3rem 0;
	border: 1px solid #ddd;
	background-color: rgb(34,193,195, 0.35);

	font-weight: 600;
	font-family: Bebas Neue, serif;
	letter-spacing: 0.15rem;
	font-size: 1.05rem;
	padding: 0.5rem 0.5rem;

	cursor: pointer;

	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: rgb(34,193,195, 0.55);
		box-shadow: 0 0 10px 0 rgba(34,193,195, 0.55);
	}

	&:hover:disabled {
		background-color: rgb(34,193,195, 0.35);
		box-shadow: none;
		cursor: not-allowed;
	}
`;