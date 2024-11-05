import { useState } from 'react';
import {
	FilteredContainer,
	InputsContainer,
	MainContainer,
	ResultContainer,
	StyledButton
} from './MainContent.styles';
import LoadingSpinner from '../Loading Circle/LoadingSpiner';

const MainContent = () => {
	const [inputsBinInventory, setInputsBinInventory] = useState([]);
	const [inputsSelectedSizeBins, setInputsSelectedSizeBins] = useState([]);
	const [filteredInventory, setFilteredInventory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleBinInventoryChange = event => {
		const newValues = event.target.value.split(/\s+/);
		setInputsBinInventory([...inputsBinInventory, ...newValues]);
		event.target.value = '';
	};

	const handleSelectedSizeChange = event => {
		const newValues = event.target.value.split(/\s+/);
		setInputsSelectedSizeBins(newValues);
		event.target.value = '';
	};

	const handleRunFilter = () => {
		setIsLoading(true);
		setProgress(0);

		const interval = setInterval(() => {
			setProgress(prev => {
				if (prev >= 100) {
					clearInterval(interval);
					const filtered = inputsBinInventory.filter(code =>
						inputsSelectedSizeBins.some(size => code.includes(size))
					);
					setFilteredInventory(filtered);
					setIsLoading(false);
					return 100;
				}
				return prev + 10;
			});
		}, 100);
	};

	return (
		<>
			<MainContainer>
				<div>
					<h3>Inventory Bins</h3>
					<input
						type='text'
						placeholder='Paste your inventory bins'
						onChange={handleBinInventoryChange}
						value={inputsBinInventory.join(' ')}
					/>
					<InputsContainer>
						{inputsBinInventory.length > 0 && (
							<ul>
								{inputsBinInventory.map((code, index) => (
									<li key={index}>{code}</li>
								))}
							</ul>
						)}
					</InputsContainer>
				</div>

				<div>
					<h3>Selected Size Bins</h3>
					<input
						type='text'
						onChange={handleSelectedSizeChange}
						placeholder='Enter Selected Sizes separated by spaces'
					/>
					<InputsContainer>
						{inputsSelectedSizeBins.length > 0 && (
							<ul>
								{inputsSelectedSizeBins.map((code, index) => (
									<li key={index}>{code}</li>
								))}
							</ul>
						)}
					</InputsContainer>
				</div>

				{/* Show ResultContainer only when there are filtered results and loading is false */}
				{!isLoading && filteredInventory.length > 0 && (
					<ResultContainer>
						<h3>Result Bins</h3>
						<FilteredContainer>
							<InputsContainer>
								<ul>
									{filteredInventory.map((code, index) => (
										<li key={index}>{code}</li>
									))}
								</ul>
							</InputsContainer>
						</FilteredContainer>
					</ResultContainer>
				)}

				{/* Show loading spinner */}
				{isLoading && <LoadingSpinner progress={progress} />}
				<StyledButton onClick={handleRunFilter}>Run Filter</StyledButton>
			</MainContainer>
		</>
	);
};

export default MainContent;
