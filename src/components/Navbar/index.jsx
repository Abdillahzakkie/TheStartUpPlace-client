import React, { useContext } from "react";
import { web3Context } from "../Context";
import { NavbarContainer } from "./styles";

function Navbar() {
	const { user, balance, shortener } = useContext(web3Context);
	return (
		<NavbarContainer className="grid">
			<header className="grid">
				<h1>The StartUp Place</h1>
			</header>

			<div className="grid wallets">
				<div className="grid details">
					<p>{shortener(user)}</p>
					<p>{parseFloat(balance).toFixed(2)} ETH</p>
				</div>
			</div>
		</NavbarContainer>
	);
}

export default Navbar;
