import React, { useState } from "react";
import ERC20Holdings from "./ERC20Holdings";
import { HomeContainer } from "./styles";

function Home() {
	const [activeTab, setActiveTab] = useState("1");
	return (
		<HomeContainer className="grid">
			<div className="grid wrapper">
				<div className="grid tabs">
					<div className="grid tab" onClick={() => setActiveTab("1")}>
						<p>ERC20 Holdings</p>
					</div>
					<div className="grid tab" onClick={() => setActiveTab("2")}>
						<p>NFT Collections</p>
					</div>
					<div className="grid tab" onClick={() => setActiveTab("3")}>
						<p>Transactions</p>
					</div>
				</div>

				<div className="grid tab-details">
					{activeTab === "1" && <ERC20Holdings />}
				</div>
			</div>
		</HomeContainer>
	);
}

export default Home;
