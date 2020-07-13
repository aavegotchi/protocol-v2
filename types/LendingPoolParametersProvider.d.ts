/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface LendingPoolParametersProviderInterface extends Interface {
  functions: {
    getFlashLoanFeesInBips: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    getMaxStableRateBorrowSizePercent: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    getRebalanceDownRateDelta: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    initialize: TypedFunctionDescription<{
      encode([_addressesProvider]: [string]): string;
    }>;
  };

  events: {};
}

export class LendingPoolParametersProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): LendingPoolParametersProvider;
  attach(addressOrName: string): LendingPoolParametersProvider;
  deployed(): Promise<LendingPoolParametersProvider>;

  on(event: EventFilter | string, listener: Listener): LendingPoolParametersProvider;
  once(event: EventFilter | string, listener: Listener): LendingPoolParametersProvider;
  addListener(eventName: EventFilter | string, listener: Listener): LendingPoolParametersProvider;
  removeAllListeners(eventName: EventFilter | string): LendingPoolParametersProvider;
  removeListener(eventName: any, listener: Listener): LendingPoolParametersProvider;

  interface: LendingPoolParametersProviderInterface;

  functions: {
    getFlashLoanFeesInBips(): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    getMaxStableRateBorrowSizePercent(): Promise<BigNumber>;

    getRebalanceDownRateDelta(): Promise<BigNumber>;

    initialize(
      _addressesProvider: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  getFlashLoanFeesInBips(): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  getMaxStableRateBorrowSizePercent(): Promise<BigNumber>;

  getRebalanceDownRateDelta(): Promise<BigNumber>;

  initialize(
    _addressesProvider: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    getFlashLoanFeesInBips(): Promise<BigNumber>;

    getMaxStableRateBorrowSizePercent(): Promise<BigNumber>;

    getRebalanceDownRateDelta(): Promise<BigNumber>;

    initialize(_addressesProvider: string): Promise<BigNumber>;
  };
}