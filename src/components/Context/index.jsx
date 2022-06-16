import axios from "axios";
import { createContext, Component } from "react";
import Web3 from "web3";
// import axios from "axios";

const web3Context = createContext();

class Web3Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			web3: null,
			user: null,
			provider: null,
			balance: 0,
			// note this endpoint was designed by me to query and ethereum address data
			// Here is a documentation of the endpoint: https://documenter.getpostman.com/view/13796786/UVkntGTB
			BASE_URL: "https://zoopr-backend.herokuapp.com/api",
			transactionHistory: [],
		};
	}

	async componentDidMount() {
		await this.connectDapp();
	}

	connectDapp = async () => {
		try {
			const _chainId = 4;
			const provider = window.ethereum;
			provider.enable();

			await this.connectWeb3(provider, _chainId);
			await this.loadBlockchainData();
		} catch (error) {
			return error;
		}
	};

	connectWeb3 = async (provider, chainId) => {
		try {
			const web3 = new Web3(provider);
			if (chainId !== (await web3.eth.getChainId())) {
				await provider.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: "0x4" }],
				});
			}
			// checks if chainId was successfully switched
			if ((await web3.eth.getChainId()) !== chainId) {
				return alert("Please switch wallet to Rinkeby Testnet");
			}

			const _accounts = await web3.eth.getAccounts();
			const user = web3.utils.toChecksumAddress(_accounts[0]);
			const _accountBalance = web3.utils.fromWei(
				await web3.eth.getBalance(user)
			);

			this.setState({
				loading: false,
				web3,
				user,
				provider,
				balance: _accountBalance,
			});
		} catch (error) {
			return error;
		}
	};

	// load blockchain data
	loadBlockchainData = async ({ user } = this.state) => {
		try {
			const _accountERC20Holdings = await this.getAccountERC20Holdings(user);
			this.setState({
				transactionHistory: _accountERC20Holdings,
			});
		} catch (error) {
			return error;
		}
	};

	getAccountERC20Holdings = async (_account) => {
		try {
			const _url = `${this.state.BASE_URL}/erc20/getAccountERC20Holdings?account=${_account}`;
			const { data } = await axios.get(_url);

			return data;
		} catch (error) {
			return error;
		}
	};

	// HELPERS FUNCTIONS
	fromWei = (_amount, { web3 } = this.state) =>
		web3.utils.fromWei(_amount, "ether");

	toWei = (_amount, { web3 } = this.state) =>
		web3.utils.toWei(_amount, "ether");

	toChecksumAddress = (_account, { web3 } = this.state) =>
		web3.utils.toChecksumAddress(_account);

	closeModal = () => this.setState({ modalState: false });

	reRender = async () => await this.loadBlockchainData();

	updateAccount = async (_newAddress) => {
		this.setState({ user: this.toChecksumAddress(_newAddress) });
		await this.reRender();
	};

	shortener = (_data = "") => {
		if (!_data) return "";
		const _step = 6;
		let _shortenedAddress = [];

		for (let i = 0; i < _step; i++)
			_shortenedAddress = [..._shortenedAddress, _data[i]];
		_shortenedAddress = [..._shortenedAddress, "..."];
		for (let i = _data.length - _step; i < _data.length; i++)
			_shortenedAddress = [..._shortenedAddress, _data[i]];
		return _shortenedAddress.join("");
	};

	render() {
		return (
			<web3Context.Provider
				value={{
					...this.state,
					connectDapp: this.connectDapp,
					closeModal: this.closeModal,
					reRender: this.reRender,
					updateAccount: this.updateAccount,

					fromWei: this.fromWei,
					toWei: this.toWei,
					shortener: this.shortener,
				}}
			>
				{this.props.children}
			</web3Context.Provider>
		);
	}
}

export { web3Context, Web3Provider };
