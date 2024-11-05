import { DevelopText, StyledHeader } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<h3>
				MAD7 <strong>Bin Pick Cons Filter</strong>
			</h3>
			<DevelopText>
				<p>
					<strong>
						Está aplicación ha sido desarrollada por @Yebram, envía un slack o
						un chime con tu feedback. Gracias
					</strong>
				</p>
				<p>
					This app was developed for @yebram, send slack or chime with your
					feedback. Thank you.
				</p>
			</DevelopText>
		</StyledHeader>
	);
};

export default Header;
