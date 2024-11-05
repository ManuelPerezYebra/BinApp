import styled from 'styled-components';

const MainContainer = styled.header`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	max-width: 800px;
	gap: 20px;
	width: 70%;
	margin: 20px auto;
	text-align: center;
	padding: 20px;
	justify-content: space-around;
	input {
		padding: 15px;
		width: 200px;
		border: 1px solid black;
		border-radius: 10px;
		box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
	}
`;
const InputsContainer = styled.div`
	padding: 20px;
	margin-top: 30px;
	width: 200px;
	border: 1px solid black;
	border-radius: 10px;
	box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
	height: 150px;
	overflow-y: auto;
	text-align: start;
`;

const ResultContainer = styled.div`
	text-align: center;

	margin: auto;

	h3 {
		margin: 0px;
	}
`;
const FilteredContainer = styled.div`
	display: flex;
	justify-content: center;
`;
const StyledButton = styled.div`
	width: 100%;
	text-align: center;
	padding: 10px;
	margin: 20px auto;
	background-color: #ffd812;
	border: none;
	border-radius: 10px;
	box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.07);
	font-weight: 700;
	cursor: pointer;
	&:hover {
		box-shadow: 0px 0px 5px 6px rgba(0, 136, 255, 0.4);
	}
`;

export {
	MainContainer,
	InputsContainer,
	ResultContainer,
	FilteredContainer,
	StyledButton
};
