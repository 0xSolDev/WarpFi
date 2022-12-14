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

interface VaultFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createUpgradableVault(uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "updateVaultLogic(address)": FunctionFragment;
    "vaultLogic()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createUpgradableVault",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateVaultLogic",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultLogic",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createUpgradableVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateVaultLogic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaultLogic", data: BytesLike): Result;

  events: {
    "NewVault(address,uint256)": EventFragment;
    "VaultUpdated(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultUpdated"): EventFragment;
}

export class VaultFactory extends Contract {
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

  interface: VaultFactoryInterface;

  functions: {
    createUpgradableVault(
      _flashLoanRate: BigNumberish,
      _vaultOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createUpgradableVault(uint256,address)"(
      _flashLoanRate: BigNumberish,
      _vaultOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    updateVaultLogic(
      _newVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateVaultLogic(address)"(
      _newVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vaultLogic(overrides?: CallOverrides): Promise<[string]>;

    "vaultLogic()"(overrides?: CallOverrides): Promise<[string]>;
  };

  createUpgradableVault(
    _flashLoanRate: BigNumberish,
    _vaultOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createUpgradableVault(uint256,address)"(
    _flashLoanRate: BigNumberish,
    _vaultOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  updateVaultLogic(
    _newVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateVaultLogic(address)"(
    _newVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vaultLogic(overrides?: CallOverrides): Promise<string>;

  "vaultLogic()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createUpgradableVault(
      _flashLoanRate: BigNumberish,
      _vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createUpgradableVault(uint256,address)"(
      _flashLoanRate: BigNumberish,
      _vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    updateVaultLogic(
      _newVault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateVaultLogic(address)"(
      _newVault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultLogic(overrides?: CallOverrides): Promise<string>;

    "vaultLogic()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    NewVault(
      vault: null,
      created: null
    ): TypedEventFilter<
      [string, BigNumber],
      { vault: string; created: BigNumber }
    >;

    VaultUpdated(
      vault: null,
      created: null
    ): TypedEventFilter<
      [string, BigNumber],
      { vault: string; created: BigNumber }
    >;
  };

  estimateGas: {
    createUpgradableVault(
      _flashLoanRate: BigNumberish,
      _vaultOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createUpgradableVault(uint256,address)"(
      _flashLoanRate: BigNumberish,
      _vaultOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateVaultLogic(
      _newVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateVaultLogic(address)"(
      _newVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vaultLogic(overrides?: CallOverrides): Promise<BigNumber>;

    "vaultLogic()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createUpgradableVault(
      _flashLoanRate: BigNumberish,
      _vaultOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createUpgradableVault(uint256,address)"(
      _flashLoanRate: BigNumberish,
      _vaultOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateVaultLogic(
      _newVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateVaultLogic(address)"(
      _newVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vaultLogic(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vaultLogic()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
