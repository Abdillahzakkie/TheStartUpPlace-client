import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { web3Context } from "./components/Context";

require("dotenv/config");

// const ethereum = window.ethereum;

const App = () => {
	const { loading, updateAccount, provider, connectDapp } =
		useContext(web3Context);
	useEffect(() => {
		if (loading) return;
		provider.on("accountsChanged", async (_accounts) => await connectDapp());
		provider.on("chainChanged", () => window.location.reload());
	}, [loading, provider, updateAccount, connectDapp]);

	return (
		<div className="grid">
			<div className="grid">
				<Navbar />
				<div className="grid App">
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default App;
