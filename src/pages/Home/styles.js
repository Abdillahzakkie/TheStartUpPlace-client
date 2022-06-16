import styled from "styled-components";

export const HomeContainer = styled.div`
	width: 100vw;
	height: 92.5vh;

	.wrapper {
		grid-template-rows: 60px auto;
		width: 60%;
		height: 100%;
		background: var(--dark);
		margin: 1em auto;
		padding: 2em;
		grid-gap: 1em 0;

		.tabs {
			grid-template-columns: repeat(3, 1fr);
			height: 100%;
			width: 600px;
			margin: 0;
			align-items: center;
			grid-gap: 0 1em;

			.tab {
				background: var(--light);
				color: var(--dark);

				place-items: center;
				width: 100%;
				height: 100%;
				border-radius: 0.25em;
				user-select: none;
				cursor: pointer;

				p {
					font-size: 1.2em;
				}
			}
		}

		.tab-details {
			width: 100%;
			min-height: 100px;
		}
	}
`;
