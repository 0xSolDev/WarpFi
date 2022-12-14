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

interface UUPSProxiableInterface extends ethers.utils.Interface {
  functions: {
    "getCodeAddress()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "updateCode(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCodeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "updateCode", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "getCodeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateCode", data: BytesLike): Result;

  events: {
    "CodeUpdated(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CodeUpdated"): EventFragment;
}

export class UUPSProxiable extends Contract {
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

  interface: UUPSProxiableInterface;

  functions: {
    getCodeAddress(
      overrides?: CallOverrides
    ): Promise<[string] & { codeAddress: string }>;

    "getCodeAddress()"(
      overrides?: CallOverrides
    ): Promise<[string] & { codeAddress: string }>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<[string]>;

    updateCode(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateCode(address)"(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getCodeAddress(overrides?: CallOverrides): Promise<string>;

  "getCodeAddress()"(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  "proxiableUUID()"(overrides?: CallOverrides): Promise<string>;

  updateCode(
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateCode(address)"(
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCodeAddress(overrides?: CallOverrides): Promise<string>;

    "getCodeAddress()"(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<string>;

    updateCode(newAddress: string, overrides?: CallOverrides): Promise<void>;

    "updateCode(address)"(
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CodeUpdated(
      uuid: null,
      codeAddress: null
    ): TypedEventFilter<
      [string, string],
      { uuid: string; codeAddress: string }
    >;
  };

  estimateGas: {
    getCodeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getCodeAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateCode(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateCode(address)"(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCodeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCodeAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateCode(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateCode(address)"(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
