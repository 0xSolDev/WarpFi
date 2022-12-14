/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PriceOracleAggregatorInterface extends ethers.utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "addStable(address[])": FunctionFragment;
    "assetToOracle(address)": FunctionFragment;
    "getPriceInUSD(address)": FunctionFragment;
    "getPriceInUSDMultiple(address[])": FunctionFragment;
    "owner()": FunctionFragment;
    "removeOracleForAsset(address)": FunctionFragment;
    "setOracleForAsset(address[],address[])": FunctionFragment;
    "stableTokens(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addStable", values: [string[]]): string;
  encodeFunctionData(
    functionFragment: "assetToOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceInUSD",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceInUSDMultiple",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeOracleForAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleForAsset",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "stableTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addStable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetToOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceInUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceInUSDMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOracleForAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOracleForAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipAccepted(address,address,uint256)": EventFragment;
    "StableTokenAdded(address,uint256)": EventFragment;
    "TransferControl(address,uint256)": EventFragment;
    "UpdateOracle(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableTokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferControl"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateOracle"): EventFragment;
}

export class PriceOracleAggregator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PriceOracleAggregatorInterface;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addStable(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addStable(address[])"(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assetToOracle(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "assetToOracle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;

    getPriceInUSDMultiple(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { prices: BigNumber[] }>;

    "getPriceInUSDMultiple(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { prices: BigNumber[] }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    removeOracleForAsset(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeOracleForAsset(address)"(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracleForAsset(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setOracleForAsset(address[],address[])"(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stableTokens(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "stableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "acceptOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addStable(
    _tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addStable(address[])"(
    _tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assetToOracle(arg0: string, overrides?: CallOverrides): Promise<string>;

  "assetToOracle(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getPriceInUSD(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getPriceInUSD(address)"(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriceInUSDMultiple(
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getPriceInUSDMultiple(address[])"(
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeOracleForAsset(
    _asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeOracleForAsset(address)"(
    _asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracleForAsset(
    _asset: string[],
    _oracle: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setOracleForAsset(address[],address[])"(
    _asset: string[],
    _oracle: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stableTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "stableTokens(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

    addStable(_tokens: string[], overrides?: CallOverrides): Promise<void>;

    "addStable(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    assetToOracle(arg0: string, overrides?: CallOverrides): Promise<string>;

    "assetToOracle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceInUSDMultiple(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getPriceInUSDMultiple(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeOracleForAsset(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeOracleForAsset(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracleForAsset(
      _asset: string[],
      _oracle: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setOracleForAsset(address[],address[])"(
      _asset: string[],
      _oracle: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    stableTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "stableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipAccepted(
      prevOwner: null,
      newOwner: null,
      timestamp: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { prevOwner: string; newOwner: string; timestamp: BigNumber }
    >;

    StableTokenAdded(
      _token: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _token: string; timestamp: BigNumber }
    >;

    TransferControl(
      _newTeam: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _newTeam: string; timestamp: BigNumber }
    >;

    UpdateOracle(
      token: null,
      oracle: null
    ): TypedEventFilter<[string, string], { token: string; oracle: string }>;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addStable(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addStable(address[])"(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assetToOracle(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "assetToOracle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceInUSDMultiple(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriceInUSDMultiple(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeOracleForAsset(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeOracleForAsset(address)"(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracleForAsset(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setOracleForAsset(address[],address[])"(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stableTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "stableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addStable(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addStable(address[])"(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assetToOracle(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "assetToOracle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceInUSDMultiple(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPriceInUSDMultiple(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeOracleForAsset(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeOracleForAsset(address)"(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracleForAsset(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setOracleForAsset(address[],address[])"(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "stableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
