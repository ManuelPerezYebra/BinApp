import Header from './components/header/Header';
import MainContent from './components/MainContent/MainContent';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<Header />
			<MainContent />
		</>
	);
};

export default App;
