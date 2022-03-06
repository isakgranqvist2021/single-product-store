import styled from 'styled-components';

const Product = styled('div')`
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	padding: 50px;
	width: 950px;
	background-color: rgba(0, 0, 0, 0.31);
	border-radius: 10px;
	background-color: #fff;

	@media (max-width: 1120px) {
		width: 90%;
		padding: 30px;
	}
`;

export const Styled = { Product };
