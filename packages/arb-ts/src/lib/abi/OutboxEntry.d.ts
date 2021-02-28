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
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface OutboxEntryInterface extends ethers.utils.Interface {
  functions: {
    'destroy()': FunctionFragment
    'initialize(address,bytes32,uint256)': FunctionFragment
    'isMaster()': FunctionFragment
    'numRemaining()': FunctionFragment
    'root()': FunctionFragment
    'spendOutput(bytes32,bytes32)': FunctionFragment
    'spentOutput(bytes32)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'destroy', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, BytesLike, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'isMaster', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'numRemaining',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'root', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'spendOutput',
    values: [BytesLike, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'spentOutput',
    values: [BytesLike]
  ): string

  decodeFunctionResult(functionFragment: 'destroy', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMaster', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'numRemaining',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'root', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'spendOutput', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'spentOutput', data: BytesLike): Result

  events: {}
}

export class OutboxEntry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: OutboxEntryInterface

  functions: {
    destroy(overrides?: Overrides): Promise<ContractTransaction>

    'destroy()'(overrides?: Overrides): Promise<ContractTransaction>

    initialize(
      _bridge: string,
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,bytes32,uint256)'(
      _bridge: string,
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    isMaster(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    'isMaster()'(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    numRemaining(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    'numRemaining()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    root(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    'root()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    spendOutput(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'spendOutput(bytes32,bytes32)'(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    spentOutput(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    'spentOutput(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>
  }

  destroy(overrides?: Overrides): Promise<ContractTransaction>

  'destroy()'(overrides?: Overrides): Promise<ContractTransaction>

  initialize(
    _bridge: string,
    _root: BytesLike,
    _numInBatch: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,bytes32,uint256)'(
    _bridge: string,
    _root: BytesLike,
    _numInBatch: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  isMaster(overrides?: CallOverrides): Promise<boolean>

  'isMaster()'(overrides?: CallOverrides): Promise<boolean>

  numRemaining(overrides?: CallOverrides): Promise<BigNumber>

  'numRemaining()'(overrides?: CallOverrides): Promise<BigNumber>

  root(overrides?: CallOverrides): Promise<string>

  'root()'(overrides?: CallOverrides): Promise<string>

  spendOutput(
    _root: BytesLike,
    _id: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'spendOutput(bytes32,bytes32)'(
    _root: BytesLike,
    _id: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  spentOutput(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>

  'spentOutput(bytes32)'(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>

  callStatic: {
    destroy(overrides?: CallOverrides): Promise<void>

    'destroy()'(overrides?: CallOverrides): Promise<void>

    initialize(
      _bridge: string,
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,bytes32,uint256)'(
      _bridge: string,
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    isMaster(overrides?: CallOverrides): Promise<boolean>

    'isMaster()'(overrides?: CallOverrides): Promise<boolean>

    numRemaining(overrides?: CallOverrides): Promise<BigNumber>

    'numRemaining()'(overrides?: CallOverrides): Promise<BigNumber>

    root(overrides?: CallOverrides): Promise<string>

    'root()'(overrides?: CallOverrides): Promise<string>

    spendOutput(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'spendOutput(bytes32,bytes32)'(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    spentOutput(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>

    'spentOutput(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>
  }

  filters: {}

  estimateGas: {
    destroy(overrides?: Overrides): Promise<BigNumber>

    'destroy()'(overrides?: Overrides): Promise<BigNumber>

    initialize(
      _bridge: string,
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,bytes32,uint256)'(
      _bridge: string,
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    isMaster(overrides?: CallOverrides): Promise<BigNumber>

    'isMaster()'(overrides?: CallOverrides): Promise<BigNumber>

    numRemaining(overrides?: CallOverrides): Promise<BigNumber>

    'numRemaining()'(overrides?: CallOverrides): Promise<BigNumber>

    root(overrides?: CallOverrides): Promise<BigNumber>

    'root()'(overrides?: CallOverrides): Promise<BigNumber>

    spendOutput(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'spendOutput(bytes32,bytes32)'(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    spentOutput(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    'spentOutput(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    destroy(overrides?: Overrides): Promise<PopulatedTransaction>

    'destroy()'(overrides?: Overrides): Promise<PopulatedTransaction>

    initialize(
      _bridge: string,
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,bytes32,uint256)'(
      _bridge: string,
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isMaster()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    numRemaining(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'numRemaining()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'root()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    spendOutput(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'spendOutput(bytes32,bytes32)'(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    spentOutput(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'spentOutput(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
