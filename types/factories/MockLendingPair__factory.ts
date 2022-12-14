/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockLendingPair } from "../MockLendingPair";

export class MockLendingPair__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockLendingPair> {
    return super.deploy(overrides || {}) as Promise<MockLendingPair>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockLendingPair {
    return super.attach(address) as MockLendingPair;
  }
  connect(signer: Signer): MockLendingPair__factory {
    return super.connect(signer) as MockLendingPair__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockLendingPair {
    return new Contract(address, _abi, signerOrProvider) as MockLendingPair;
  }
}

const _abi = [
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
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061012a806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806352d1902d1460375780638340f549146051575b600080fd5b603d6060565b6040516048919060eb565b60405180910390f35b603d605c36600460b5565b6084565b7fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc690565b60019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811460b057600080fd5b919050565b60008060006060848603121560c8578283fd5b60cf84608d565b925060db60208501608d565b9150604084013590509250925092565b9081526020019056fea26469706673582212208998311ff0f0827c9db4675d9d71908fdba131e4910454a0a89d9572eb50484864736f6c63430008010033";
