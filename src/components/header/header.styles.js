import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: white;
	text-align: center;
	align-items: center;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.07);
	display: flex;
	justify-content: space-between;
	h3 {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-style: normal;
		color: #006e84;
		padding: 5px;
		margin: 0;
	}
`;
const DevelopText = styled.p`
	font-size: 8px;
	color: #a3a3a3;
	margin-right: 100px;
`;
export { StyledHeader, DevelopText };
