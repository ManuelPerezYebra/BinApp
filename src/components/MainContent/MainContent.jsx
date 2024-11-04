import { useState } from 'react';
import {
	FilteredContainer,
	InputsContainer,
	MainContainer,
	ResultContainer,
	StyledButton
} from './MainContent.styles';

const MainContent = () => {
	const [inputsBinInventory, setInputsBinInventory] = useState([]);
	const [inputsSelectedSizeBins, setInputsSelectedSizeBins] = useState([]); // Array for multiple values
	const [filteredInventory, setFilteredInventory] = useState([]); // State for filtered results

	const handleBinInventoryChange = event => {
		const newValues = event.target.value.split(/\s+/); // Split on whitespace
		setInputsBinInventory([...inputsBinInventory, ...newValues]);
		event.target.value = ''; // Clear the input field after pasting
	};

	const handleSelectedSizeChange = event => {
		const newValues = event.target.value.split(/\s+/); // Split on whitespace
		setInputsSelectedSizeBins(newValues); // Replace with new array
		event.target.value = ''; // Clear the input field after pasting
	};

	const handleRunFilter = () => {
		const filtered = inputsBinInventory.filter(code =>
			inputsSelectedSizeBins.some(size => code.includes(size))
		);
		setFilteredInventory(filtered);
	};
	console.log(filteredInventory);

	return (
		<>
			<MainContainer>
				<div>
					<h3>Inventory Bins</h3>
					<input
						type='text'
						placeholder='Paste your inventory bins'
						onChange={handleBinInventoryChange}
						value={inputsBinInventory.join(' ')} // Join array for display
					/>
					{/* Display the pasted Bin Inventory codes in a list */}
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
				<ResultContainer>
					<h3>Filtered Inventory</h3>
					<FilteredContainer>
						{filteredInventory.length > 0 && (
							<InputsContainer>
								<ul>
									{filteredInventory.map((code, index) => (
										<li key={index}>{code}</li>
									))}
								</ul>
							</InputsContainer>
						)}
					</FilteredContainer>
				</ResultContainer>
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
			</MainContainer>
			<StyledButton onClick={handleRunFilter}>Run Filter</StyledButton>
		</>
	);
};

export default MainContent;
