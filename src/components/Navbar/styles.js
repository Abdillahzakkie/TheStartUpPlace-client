import styled from "styled-components";

export const NavbarContainer = styled.div`
	grid-template-columns: repeat(12, 1fr);
	width: 100vw;
	height: 80px;
	background: var(--light);
	color: var(--dark);
	padding: 0 2em;
	box-shadow: 2.5px 2.5px 15px var(--dark);

	header {
		grid-column: 1/3;
		align-items: center;
		width: 100%;

		h1 {
			font-size: 1.5em;
		}
	}

	.wallets {
		grid-column: 11/13;
		width: 100%;
		place-items: end;
		align-items: center;

		.details {
			line-height: 1.5;
			width: 100%;
			place-items: end;

			p {
				font-size: 1.1em;
				letter-spacing: 2px;
				font-weight: 800;
			}
		}
	}
`;
