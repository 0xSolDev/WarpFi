/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { DebtToken } from "../DebtToken";

export class DebtToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DebtToken> {
    return super.deploy(overrides || {}) as Promise<DebtToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DebtToken {
    return super.attach(address) as DebtToken;
  }
  connect(signer: Signer): DebtToken__factory {
    return super.connect(signer) as DebtToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DebtToken {
    return new Contract(address, _abi, signerOrProvider) as DebtToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "DelegateBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "borrowAllowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "delegateBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBorrowWithSignedMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "increaseTotalDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "__owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "contract IRewardDistributorManager",
        name: "_manager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_debtOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "principal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardManager",
    outputs: [
      {
        internalType: "contract IRewardDistributorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userBorrowAllowanceNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b506080516116af61004d600039600050506116af6000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636f307dc3116100f9578063a457c2d711610097578063d505accf11610071578063d505accf1461034f578063dd62ed3e14610362578063ecd2672714610370578063ffa1ad7414610383576101b9565b8063a457c2d7146102a4578063a9059cbb1461032e578063c6c3bbe61461033c576101b9565b80638da5cb5b116100d35780638da5cb5b146102f857806395d89b4114610300578063999af068146103085780639dc29fac1461031b576101b9565b80636f307dc3146102ca57806370a08231146102d25780637ecebe00146102e5576101b9565b806323b872dd11610166578063362925c211610140578063362925c2146102895780633644e5151461029c57806339509351146102a45780636bd76d24146102b7576101b9565b806323b872dd1461024e5780632ce0f9d614610261578063313ce56714610274576101b9565b8063139cace511610197578063139cace514610211578063146fac451461022657806318160ddd14610239576101b9565b806306fdde03146101be578063095ea7b3146101dc5780630f4ef8a6146101fc575b600080fd5b6101c661038b565b6040516101d391906112ac565b60405180910390f35b6101ef6101ea366004611133565b610419565b6040516101d3919061121c565b61020461043c565b6040516101d391906111c5565b61022461021f3660046110cf565b610451565b005b61022461023436600461115e565b6105e0565b61024161061e565b6040516101d39190611227565b6101ef61025c36600461101f565b610625565b61024161026f366004610f29565b61063f565b61027c61065a565b6040516101d39190611596565b610224610297366004610f84565b610663565b610241610843565b6101ef6102b2366004611133565b610852565b6102416102c5366004610f4c565b61086c565b610204610897565b6102416102e0366004610f29565b6108a6565b6102416102f3366004610f29565b61092d565b610204610948565b6101c6610957565b610241610316366004610f29565b610964565b610224610329366004611133565b610976565b6101ef61025c366004611133565b61022461034a36600461101f565b610a08565b61022461035d36600461105f565b610a96565b6102416102b2366004610f4c565b61022461037e366004611133565b610aae565b610241610ab9565b60038054610398906115d3565b80601f01602080910402602001604051908101604052809291908181526020018280546103c4906115d3565b80156104115780601f106103e657610100808354040283529160200191610411565b820191906000526020600020905b8154815290600101906020018083116103f457829003601f168201915b505050505081565b600060405162461bcd60e51b8152600401610433906114f1565b60405180910390fd5b600c546201000090046001600160a01b031681565b6001600160a01b0385166104775760405162461bcd60e51b815260040161043390611402565b6000610481610abe565b6001600160a01b038816600090815260106020526040812080547f0185d0b1db4d8eb3ef78b2d741d2deb2b15f885aab86bc0d22372d976faf1189927f4dbcfb5165b0222661b65bf3148c2d16a4036a909a3e8c9f9436d5b8439a1866928c928c928c92906104ef8361160e565b9190505560405160200161050896959493929190611230565b6040516020818303038152906040528051906020012060405160200161052f9291906111aa565b60405160208183030381529060405280519060200120905060006001828686866040516000815260200160405260405161056c949392919061128e565b6020604051602081039080840390855afa15801561058e573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b0316146105cb5760405162461bcd60e51b8152600401610433906113a4565b6105d6888888610af2565b5050505050505050565b600e546001600160a01b0316331461060a5760405162461bcd60e51b8152600401610433906112ff565b8060025461061891906115a4565b60025550565b6002545b90565b600060405162461bcd60e51b81526004016104339061136d565b6001600160a01b031660009081526020819052604090205490565b60045460ff1681565b600c54610100900460ff168061067c575061067c610b83565b8061068a5750600c5460ff16155b6106a65760405162461bcd60e51b815260040161043390611426565b600c54610100900460ff161580156106d157600c805460ff1961ff0019909116610100171660011790555b6001600160a01b0386166106f75760405162461bcd60e51b8152600401610433906113db565b6001600160a01b03851661071d5760405162461bcd60e51b815260040161043390611336565b85600e60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561077f57600080fd5b505afa158015610793573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b7919061118e565b90506107c4858583610b89565b6107cd85610bc9565b50600d805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0387811691909117909155600c805475ffffffffffffffffffffffffffffffffffffffff000019166201000092851692909202919091179055801561083b57600c805461ff00191690555b505050505050565b600061084d610abe565b905090565b600060405162461bcd60e51b815260040161043390611483565b6001600160a01b039182166000908152600f6020908152604080832093909416825291909152205490565b600d546001600160a01b031681565b600e54604051637746efab60e01b81526000916001600160a01b031690637746efab906108d79085906004016111c5565b60206040518083038186803b1580156108ef57600080fd5b505afa158015610903573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109279190611176565b92915050565b6001600160a01b03166000908152600b602052604090205490565b600e546001600160a01b031690565b60058054610398906115d3565b60106020526000908152604090205481565b600e546001600160a01b031633146109a05760405162461bcd60e51b8152600401610433906112ff565b6109ab826000610bef565b806109b5836108a6565b6109bf91906115bc565b6001600160a01b0383166000908152602081905260409020556002548111156109ec576000600255610a04565b80600260008282546109fe91906115bc565b90915550505b5050565b600e546001600160a01b03163314610a325760405162461bcd60e51b8152600401610433906112ff565b6001600160a01b038316610a585760405162461bcd60e51b8152600401610433906114ba565b816001600160a01b0316836001600160a01b031614610a7c57610a7c838383610c54565b610a87600084610bef565b610a918382610cb6565b505050565b60405162461bcd60e51b815260040161043390611528565b610a04338383610af2565b600181565b6000600754610acb610d63565b1415610ada5750600654610622565b610aeb600a54600854600954610d67565b9050610622565b6001600160a01b038216610b185760405162461bcd60e51b815260040161043390611402565b6001600160a01b038084166000908152600f602090815260408083209386168352929052819020829055517f8af24aec445699c4c2d8918aa7fd258691a51df1e6e7b0cb07888072c752fcc890610b769085908590859042906111f3565b60405180910390a1505050565b303b1590565b8251610b9c906003906020860190610e09565b508151610bb0906005906020850190610e09565b506004805460ff191660ff929092169190911790555050565b610bec81604051806040016040528060018152602001603160f81b815250610da8565b50565b600c54604051633b4198ef60e21b8152620100009091046001600160a01b03169063ed0663bc90610c2690859085906004016111d9565b600060405180830381600087803b158015610c4057600080fd5b505af115801561083b573d6000803e3d6000fd5b6001600160a01b038084166000908152600f6020908152604080832093861683529290522054610c859082906115bc565b6001600160a01b039384166000908152600f6020908152604080832095909616825293909352929091209190915550565b6001600160a01b038216610cdc5760405162461bcd60e51b81526004016104339061155f565b8060026000828254610cee91906115a4565b90915550819050610cfe836108a6565b610d0891906115a4565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610d57908590611227565b60405180910390a35050565b4690565b6000838383610d74610d63565b30604051602001610d89959493929190611262565b6040516020818303038152906040528051906020012090509392505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610def610d63565b600755610dfd818484610d67565b600655600a5550505050565b828054610e15906115d3565b90600052602060002090601f016020900481019282610e375760008555610e7d565b82601f10610e5057805160ff1916838001178555610e7d565b82800160010185558215610e7d579182015b82811115610e7d578251825591602001919060010190610e62565b50610e89929150610e8d565b5090565b5b80821115610e895760008155600101610e8e565b600082601f830112610eb2578081fd5b813567ffffffffffffffff80821115610ecd57610ecd61163f565b604051601f8301601f19908116603f01168101908282118183101715610ef557610ef561163f565b81604052838152866020858801011115610f0d578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610f3a578081fd5b8135610f4581611655565b9392505050565b60008060408385031215610f5e578081fd5b8235610f6981611655565b91506020830135610f7981611655565b809150509250929050565b600080600080600060a08688031215610f9b578081fd5b8535610fa681611655565b94506020860135610fb681611655565b9350604086013567ffffffffffffffff80821115610fd2578283fd5b610fde89838a01610ea2565b94506060880135915080821115610ff3578283fd5b5061100088828901610ea2565b925050608086013561101181611655565b809150509295509295909350565b600080600060608486031215611033578283fd5b833561103e81611655565b9250602084013561104e81611655565b929592945050506040919091013590565b600080600080600080600060e0888a031215611079578182fd5b873561108481611655565b9650602088013561109481611655565b9550604088013594506060880135935060808801356110b28161166a565b9699959850939692959460a0840135945060c09093013592915050565b60008060008060008060c087890312156110e7578182fd5b86356110f281611655565b9550602087013561110281611655565b94506040870135935060608701356111198161166a565b9598949750929560808101359460a0909101359350915050565b60008060408385031215611145578182fd5b823561115081611655565b946020939093013593505050565b60006020828403121561116f578081fd5b5035919050565b600060208284031215611187578081fd5b5051919050565b60006020828403121561119f578081fd5b8151610f458161166a565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b901515815260200190565b90815260200190565b95865260208601949094526001600160a01b03928316604086015291166060840152608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b818110156112d8578581018301518582016040015282016112bc565b818111156112e95783604083870101525b50601f01601f1916929092016040019392505050565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b60208082526012908201527f696e76616c696420756e6465726c79696e670000000000000000000000000000604082015260600190565b60208082526016908201527f5452414e534645525f4e4f545f535550504f5254454400000000000000000000604082015260600190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600a9082015269494e56414c49445f544f60b01b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526017908201527f414c4c4f57414e43455f4e4f545f535550504f52544544000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f444542545f4f574e45520000000000000000000000000000604082015260600190565b60208082526016908201527f415050524f56414c5f4e4f545f535550504f5254454400000000000000000000604082015260600190565b60208082526014908201527f5045524d49545f4e4f545f535550504f52544544000000000000000000000000604082015260600190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b600082198211156115b7576115b7611629565b500190565b6000828210156115ce576115ce611629565b500390565b6002810460018216806115e757607f821691505b6020821081141561160857634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561162257611622611629565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610bec57600080fd5b60ff81168114610bec57600080fdfea2646970667358221220d61a4246536b941cf2007eb610a353ce5f88a7b0943e6b56c6c4b18d33f828a764736f6c63430008010033";