import styled from 'styled-components';

const Product = styled('div')`
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	padding: 50px;
	width: 300px;
	background-color: #fff;
	border-radius: 10px;

	@media (max-width: 450px) {
		width: 90%;
		padding: 30px;
	}
`;

export const Styled = { Product };
