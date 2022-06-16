import React, { useContext } from "react";
import { web3Context } from "../../../components/Context";
import { ERC20HoldingsWrapper } from "./styles";

function ERC20Holdings() {
	const { transactionHistory, shortener } = useContext(web3Context);

	const erc20HoldingsData = transactionHistory.map((item, index) => {
		const {
			tokenName,
			// tokenDecimal,
			tokenSymbol,
			balance,
			assetUSD,
			contract,
		} = item;
		return (
			<div className="grid details" key={index}>
				<p className="grid card indexes">{index + 1}</p>
				<p className="grid card name">{tokenName}</p>
				<p className="grid card symbol">{tokenSymbol}</p>
				<p className="grid card asset-usd">{parseFloat(assetUSD).toFixed(2)}</p>
				<p className="grid card balance">{parseFloat(balance).toFixed(2)}</p>
				<p className="grid card contract">
					{contract === null ? "Ethereum" : shortener(contract)}
				</p>
			</div>
		);
	});

	return (
		<ERC20HoldingsWrapper>
			<header className="grid">
				<p className="grid card indexes">S/N</p>
				<p className="grid card name">Name</p>
				<p className="grid card symbol">Symbol</p>
				<p className="grid card asset-usd">USD</p>
				<p className="grid card balance">Balance</p>
				<p className="grid card contract">Contract</p>
			</header>
			{erc20HoldingsData}
		</ERC20HoldingsWrapper>
	);
}

export default ERC20Holdings;
