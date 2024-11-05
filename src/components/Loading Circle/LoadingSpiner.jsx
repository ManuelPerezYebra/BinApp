import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100px;
	position: relative;
`;

const Circle = styled.div`
	border: 8px solid #e0e0e0;
	border-top: 8px solid #ffd812;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: ${rotate} 1.5s linear infinite;
`;

const Percentage = styled.div`
	position: absolute;
	font-weight: bold;
	font-size: 18px;
`;

const LoadingSpinner = ({ progress }) => (
	<LoadingContainer>
		<Circle />
		<Percentage>{progress}%</Percentage>
	</LoadingContainer>
);

export default LoadingSpinner;
