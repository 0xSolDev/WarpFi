/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockVault } from "../MockVault";

export class MockVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockVault> {
    return super.deploy(overrides || {}) as Promise<MockVault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockVault {
    return super.attach(address) as MockVault;
  }
  connect(signer: Signer): MockVault__factory {
    return super.connect(signer) as MockVault__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVault {
    return new Contract(address, _abi, signerOrProvider) as MockVault;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "whitelist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "AllowContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "allowed",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
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
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    name: "CodeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
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
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "FlashLoan",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OwnershipAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RegisterProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RescueFunds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newTeam",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "TransferControl",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "UpdateFlashLoanRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_FLASHLOAN_RATE",
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract MockToken",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addProfit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "allowContract",
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
    ],
    name: "allowedContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
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
    name: "approveContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
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
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
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
        internalType: "contract IERC3156FlashBorrower",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
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
    name: "flashLoanRate",
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
    name: "getCodeAddress",
    outputs: [
      {
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_flashLoanRate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
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
    inputs: [],
    name: "newOwner",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "rescueFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_ceil",
        type: "bool",
      },
    ],
    name: "toShare",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "toUnderlying",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "totals",
    outputs: [
      {
        internalType: "uint256",
        name: "totalUnderlyingDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSharesMinted",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
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
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newRate",
        type: "uint256",
      },
    ],
    name: "updateFlashloanRate",
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
    ],
    name: "userApprovalNonce",
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
    name: "userApprovedContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
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
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b506001805462ff000019168155604080518082018252600c81526b576172705661756c7420763160a01b6020918201527fa40fef20e589d79043a3159d07cb3250ae0cc1485bcb2d436b4b7dc47d197c5c6080528151808301909252918152603160f81b9101527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a0526100a36100ab565b60c0526100af565b4690565b60805160a05160c05161295c6100ec600039600061185a01526000818161142601526118d701526000818161140501526118b6015261295c6000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80635c975abb1161011a578063d728e005116100ad578063da5139ca1161007c578063da5139ca146103dc578063e53b2017146103ef578063f18d03cc14610402578063f2fde38b14610415578063f7888aec14610428576101fa565b8063d728e00514610390578063d78af5f1146103a3578063d9d98ce4146103b6578063da35a26f146103c9576101fa565b80638456cb59116100e95780638456cb59146103705780638da5cb5b14610378578063c6b45dfa14610380578063d4ee1d9014610388576101fa565b80635c975abb1461033a5780635cffe9de14610342578063613255ab1461035557806379ba509714610368576101fa565b80633f4ba83a1161019257806351e0e26b1161016157806351e0e26b146102f75780635299493b1461031757806352d1902d1461032a57806354fd4d5014610332576101fa565b80633f4ba83a146102b457806346951954146102bc5780634ffe34db146102cf57806350d75d25146102e2576101fa565b80631583d56c116101ce5780631583d56c146102715780631e43a7a1146102865780631fd1ffde1461028e5780633f21c1b4146102a1576101fa565b8062f5ee4d146101ff5780630284c3f51461022857806306fdde03146102495780630b620b811461025e575b600080fd5b61021261020d366004611de9565b61043b565b60405161021f91906121ba565b60405180910390f35b61023b610236366004611f4d565b61044d565b60405161021f92919061282a565b610251610653565b60405161021f9190612258565b61021261026c366004611f4d565b61067b565b61028461027f366004611edc565b6108a0565b005b610212610904565b61028461029c366004612078565b61090a565b6102846102af366004611e3d565b61099b565b610284610cb1565b6102846102ca366004611de9565b610ce5565b61023b6102dd366004611de9565b610d1b565b6102ea610d34565b60405161021f91906120eb565b61030a610305366004611de9565b610d44565b60405161021f91906121af565b610212610325366004611edc565b610d59565b610212610d94565b610251610db8565b61030a610dd5565b61030a610350366004611fde565b610de4565b610212610363366004611de9565b611118565b610284611133565b6102846111d1565b6102ea611203565b610212611212565b6102ea61121e565b61030a61039e366004611e05565b61122d565b6102846103b1366004611eaf565b61124d565b6102126103c4366004611edc565b6112ff565b6102846103d7366004612090565b611329565b6102126103ea366004611f9d565b611484565b6102846103fd366004611de9565b611506565b610284610410366004611f4d565b61165e565b610284610423366004611de9565b6116f2565b610212610436366004611f3b565b61178f565b60086020526000908152604090205481565b600080610458610dd5565b1561047e5760405162461bcd60e51b815260040161047590612530565b60405180910390fd5b84336001600160a01b03821614806104be57506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6104da5760405162461bcd60e51b81526004016104759061258e565b600260005414156104fd5760405162461bcd60e51b815260040161047590612761565b60026000556001600160a01b0385166105285760405162461bcd60e51b81526004016104759061242e565b83925061053787856000611484565b915061054e6001600160a01b0388168730876117ac565b6001600160a01b0380881660009081526006602090815260408083209389168352929052205461057f908390612838565b6001600160a01b038089166000818152600660209081526040808320948b16835293815283822094909455908152600a90925281208054909186918391906105c8908490612838565b92505081905550828160010160008282546105e39190612838565b92505081905550856001600160a01b0316876001600160a01b0316896001600160a01b03167f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59888760405161063992919061282a565b60405180910390a450506001600055909590945092505050565b6040518060400160405280600c81526020016b576172705661756c7420763160a01b81525081565b6000610685610dd5565b156106a25760405162461bcd60e51b815260040161047590612530565b83336001600160a01b03821614806106e257506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6106fe5760405162461bcd60e51b81526004016104759061258e565b600260005414156107215760405162461bcd60e51b815260040161047590612761565b60026000556001600160a01b03841661074c5760405162461bcd60e51b81526004016104759061242e565b6107568684610d59565b6001600160a01b038088166000908152600660209081526040808320938a168352929052205490925061078a90849061288f565b6001600160a01b038088166000818152600660209081526040808320948b16835293815283822094909455908152600a90925281208054909184918391906107d390849061288f565b92505081905550838160010160008282546107ee919061288f565b909155505060018101546103e811158061080a57506001810154155b6108265760405162461bcd60e51b815260040161047590612611565b61083a6001600160a01b0388168685611837565b846001600160a01b0316866001600160a01b0316886001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db878760405161088992919061282a565b60405180910390a450506001600055949350505050565b6040516340c10f1960e01b81526001600160a01b038316906340c10f19906108ce9030908590600401612196565b600060405180830381600087803b1580156108e857600080fd5b505af11580156108fc573d6000803e3d6000fd5b505050505050565b60025481565b6003546001600160a01b031633146109345760405162461bcd60e51b815260040161047590612798565b67016345785d8a0000811061095b5760405162461bcd60e51b815260040161047590612638565b60028190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be81906109909083906121ba565b60405180910390a150565b6001600160a01b0385166109c15760405162461bcd60e51b8152600401610475906127bc565b6001600160a01b0386166109e75760405162461bcd60e51b81526004016104759061249c565b60ff83161580156109f6575081155b8015610a00575080155b15610abc576001600160a01b0386163314610a2d5760405162461bcd60e51b8152600401610475906126bc565b33321415610a4d5760405162461bcd60e51b8152600401610475906123d0565b846001600160a01b0316866001600160a01b03161415610a7f5760405162461bcd60e51b815260040161047590612305565b6001600160a01b03851660009081526009602052604090205460ff16610ab75760405162461bcd60e51b8152600401610475906127f3565b610c3d565b6000610ac6611856565b7fe8879d0159a5862e68322a449d14dcfb21ad39e0c3dc66f88aff16b87aa27eae86610b12577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b610b34565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260086020526040812080548c928c928c9291610b5e836128d2565b91905055604051602001610b77969594939291906121da565b60405160208183030381529060405280519060200120604051602001610b9e9291906120d0565b604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051610bdb949392919061223a565b6020604051602081039080840390855afa158015610bfd573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b031614610c3a5760405162461bcd60e51b8152600401610475906123f7565b50505b6001600160a01b038681166000818152600760209081526040808320948a168084529490915290819020805460ff1916881515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610ca19088906121af565b60405180910390a3505050505050565b6003546001600160a01b03163314610cdb5760405162461bcd60e51b815260040161047590612798565b610ce3611902565b565b6003546001600160a01b03163314610d0f5760405162461bcd60e51b815260040161047590612798565b610d1881611972565b50565b600a602052600090815260409020805460019091015482565b6000610d3e611a7a565b90505b90565b60096020526000908152604090205460ff1681565b6001600160a01b0382166000908152600a6020526040812060018101548154610d829085612870565b610d8c9190612850565b949350505050565b7f789f0daca1cd17baa821e8d7454225d50b9f3e7c22acb67c2b2fff4f686a128290565b604051806040016040528060018152602001603160f81b81525081565b60015462010000900460ff1690565b600060026000541415610e095760405162461bcd60e51b815260040161047590612761565b600260009081556001600160a01b0386168152600a6020526040902054841115610e455760405162461bcd60e51b8152600401610475906124c2565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610e769030906004016120eb565b60206040518083038186803b158015610e8e57600080fd5b505afa158015610ea2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec69190611f23565b9050610edc6001600160a01b0383168988611837565b6000610ee888886112ff565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610f4196959493929190612123565b602060405180830381600087803b158015610f5b57600080fd5b505af1158015610f6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f939190611f23565b14610fb05760405162461bcd60e51b81526004016104759061233c565b610fd18930610fbf848b612838565b6001600160a01b0387169291906117ac565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161100091906120eb565b60206040518083038186803b15801561101857600080fd5b505afa15801561102c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110509190611f23565b61105a919061288f565b90508181101561107c5760405162461bcd60e51b8152600401610475906124f9565b6001600160a01b0389166000908152600a6020526040812080548492906110a4908490612838565b92505081905550896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b866040516110fa92919061282a565b60405180910390a46001945050505050600160005595945050505050565b6001600160a01b03166000908152600a602052604090205490565b6004546001600160a01b0316331461115d5760405162461bcd60e51b815260040161047590612567565b6003546004546040517f3996db4523d078738f597d29c05515ab90a28170fdd8dd6aeea6b6af99700bd2926111a2926001600160a01b039182169291169042906120ff565b60405180910390a160048054600380546001600160a01b03199081166001600160a01b03841617909155169055565b6003546001600160a01b031633146111fb5760405162461bcd60e51b815260040161047590612798565b610ce3611a9f565b6003546001600160a01b031681565b67016345785d8a000081565b6004546001600160a01b031681565b600760209081526000928352604080842090915290825290205460ff1681565b6003546001600160a01b031633146112775760405162461bcd60e51b815260040161047590612798565b6001600160a01b03821661129d5760405162461bcd60e51b815260040161047590612465565b6001600160a01b03821660009081526009602052604090819020805460ff1916831515179055517f868ef4c4efa656ac9fe74e223335211b2da76220bf70e4a05c30c6a857e89e0d906112f3908490849061217b565b60405180910390a15050565b6000670de0b6b3a7640000600254836113189190612870565b6113229190612850565b9392505050565b600154610100900460ff1680611342575060015460ff16155b61135e5760405162461bcd60e51b8152600401610475906125b4565b600154610100900460ff16158015611388576001805460ff1961ff00199091166101001716811790555b6001600160a01b0382166113ae5760405162461bcd60e51b81526004016104759061265e565b67016345785d8a0000600254106113d75760405162461bcd60e51b815260040161047590612373565b6113df611afe565b61144a7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b05565b6005556002839055600380546001600160a01b0319166001600160a01b038416179055801561147f576001805461ff00191690555b505050565b6001600160a01b0383166000908152600a60205260408120600181015480156114f9578154806114b48388612870565b6114be9190612850565b93508480156114e0575085826114d48387612870565b6114de9190612850565b105b156114f3576114f0846001612838565b93505b506114fd565b8492505b50509392505050565b600260005414156115295760405162461bcd60e51b815260040161047590612761565b60026000556003546001600160a01b031633146115585760405162461bcd60e51b815260040161047590612798565b6040516370a0823160e01b81526000906001600160a01b038316906370a08231906115879030906004016120eb565b60206040518083038186803b15801561159f57600080fd5b505afa1580156115b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d79190611f23565b6001600160a01b0383166000908152600a6020526040812054919250906115fe908361288f565b60035490915061161b906001600160a01b03858116911683611837565b7f891d905c747e7308f7e952ff603f2ac799bc5abc150b5792024a59b5c96273d2838260405161164c929190612196565b60405180910390a15050600160005550565b611666610dd5565b156116835760405162461bcd60e51b815260040161047590612530565b82336001600160a01b03821614806116c357506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6116df5760405162461bcd60e51b81526004016104759061258e565b6116eb85858585611b46565b5050505050565b6003546001600160a01b0316331461171c5760405162461bcd60e51b815260040161047590612798565b6001600160a01b0381166117425760405162461bcd60e51b815260040161047590612399565b600480546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906109909083904290612196565b600660209081526000928352604080842090915290825290205481565b611831846323b872dd60e01b8585856040516024016117cd939291906120ff565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c46565b50505050565b61147f8363a9059cbb60e01b84846040516024016117cd929190612196565b60007f0000000000000000000000000000000000000000000000000000000000000000611881611cd5565b14156118905750600554610d41565b6118fb7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b05565b9050610d41565b61190a610dd5565b6119265760405162461bcd60e51b8152600401610475906122ce565b6001805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61195b611cd9565b60405161196891906120eb565b60405180910390a1565b600061197c611a7a565b6001600160a01b031614156119a35760405162461bcd60e51b815260040161047590612685565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156119dc57600080fd5b505afa1580156119f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a149190611f23565b611a1c610d94565b14611a395760405162461bcd60e51b81526004016104759061228b565b611a4281611cdd565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc611a6b610d94565b826040516109909291906121c3565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b611aa7610dd5565b15611ac45760405162461bcd60e51b815260040161047590612530565b6001805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861195b611cd9565b6001600055565b6000838383611b12611cd5565b30604051602001611b2795949392919061220e565b6040516020818303038152906040528051906020012090509392505050565b6001600160a01b038216611b6c5760405162461bcd60e51b81526004016104759061242e565b6001600160a01b03808516600090815260066020908152604080832093871683529290522054611b9d90829061288f565b6001600160a01b03858116600090815260066020908152604080832088851684529091528082209390935590841681522054611bda908290612838565b6001600160a01b0380861660008181526006602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f90611c389086906121ba565b60405180910390a450505050565b6000611c9b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611d019092919063ffffffff16565b80519091501561147f5780806020019051810190611cb99190611f07565b61147f5760405162461bcd60e51b815260040161047590612717565b4690565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6060610d8c848460008585611d1585611daa565b611d315760405162461bcd60e51b8152600401610475906126e0565b600080866001600160a01b03168587604051611d4d91906120b4565b60006040518083038185875af1925050503d8060008114611d8a576040519150601f19603f3d011682016040523d82523d6000602084013e611d8f565b606091505b5091509150611d9f828286611db0565b979650505050505050565b3b151590565b60608315611dbf575081611322565b825115611dcf5782518084602001fd5b8160405162461bcd60e51b81526004016104759190612258565b600060208284031215611dfa578081fd5b813561132281612903565b60008060408385031215611e17578081fd5b8235611e2281612903565b91506020830135611e3281612903565b809150509250929050565b60008060008060008060c08789031215611e55578182fd5b8635611e6081612903565b95506020870135611e7081612903565b94506040870135611e8081612918565b9350606087013560ff81168114611e95578283fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611ec1578182fd5b8235611ecc81612903565b91506020830135611e3281612918565b60008060408385031215611eee578182fd5b8235611ef981612903565b946020939093013593505050565b600060208284031215611f18578081fd5b815161132281612918565b600060208284031215611f34578081fd5b5051919050565b60008060408385031215611e17578182fd5b60008060008060808587031215611f62578384fd5b8435611f6d81612903565b93506020850135611f7d81612903565b92506040850135611f8d81612903565b9396929550929360600135925050565b600080600060608486031215611fb1578283fd5b8335611fbc81612903565b9250602084013591506040840135611fd381612918565b809150509250925092565b600080600080600060808688031215611ff5578283fd5b853561200081612903565b9450602086013561201081612903565b935060408601359250606086013567ffffffffffffffff80821115612033578283fd5b818801915088601f830112612046578283fd5b813581811115612054578384fd5b896020828501011115612065578384fd5b9699959850939650602001949392505050565b600060208284031215612089578081fd5b5035919050565b600080604083850312156120a2578182fd5b823591506020830135611e3281612903565b600082516120c68184602087016128a6565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b60006020825282518060208401526122778160408501602087016128a6565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b6020808252600f908201527f494e56414c49445f415050524f56450000000000000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b6020808252600d908201526c13d3931657d0d3d395149050d5609a1b604082015260600190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f544f5f414444524553530000000000000000000000000000604082015260600190565b6020808252600f908201527f696e76616c69645f616464726573730000000000000000000000000000000000604082015260600190565b6020808252600c908201526b24a72b20a624a22faaa9a2a960a11b604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600d908201526c494e56414c49445f524154494f60981b604082015260600190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252600a90820152692727aa2fa9a2a72222a960b11b604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b6020808252600f908201527f4e4f545f57484954454c49535445440000000000000000000000000000000000604082015260600190565b918252602082015260400190565b6000821982111561284b5761284b6128ed565b500190565b60008261286b57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561288a5761288a6128ed565b500290565b6000828210156128a1576128a16128ed565b500390565b60005b838110156128c15781810151838201526020016128a9565b838111156118315750506000910152565b60006000198214156128e6576128e66128ed565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610d1857600080fd5b8015158114610d1857600080fdfea264697066735822122051f82754cd5b39522f5dcb50c4e25662331b7b988478ce225ff9de4af9a1217f64736f6c63430008010033";