import styled from "styled-components";

export const ERC20HoldingsWrapper = styled.div`
	line-height: 2;
	padding: 0 1em;
	height: auto;
	background: var(--light);

	header,
	.details {
		width: 100%;
		grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
		grid-gap: 0 1em;
		/* padding: 1em 0; */
		place-items: start;

		p {
			width: 100%;
			text-align: center;
			font-size: 1.25em;
		}
	}

	header {
		font-weight: 900;
	}
`;
