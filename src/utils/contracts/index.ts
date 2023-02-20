import { Contract, providers } from 'ethers';
import Multicall from './abis/Multicall.json';
import PPIRate from './abis/PPIRate.json';
import SwappiFactory from './abis/SwappiFactory.json';
import SwappiPair from './abis/SwappiPair.json';
import VotingEscrow from './abis/VotingEscrow.json';
import ERC20ABI from './abis/ERC20.json';
const HttpProvider = new providers.JsonRpcProvider('https://evm.confluxrpc.com');

export const MulticallContract = new Contract('0x9f208d7226f05b4f43d0d36eb21d8545c3143685', Multicall.abi, HttpProvider);
export const PPIRateContract = new Contract('0x71f3136cf723825913bb2cf42b0f87f75223dfad', PPIRate.abi, HttpProvider);
export const FactoryContract = new Contract('0xe2a6f7c0ce4d5d300f97aa7e125455f5cd3342f5', SwappiFactory.abi, HttpProvider);
export const PairContract = new Contract('0xe2a6f7c0ce4d5d300f97aa7e125455f5cd3342f5', SwappiPair.abi, HttpProvider);
export const VotingEscrowContract = new Contract('0xf270e44105c1270bc7a4ffedbcb699486ada7a6a', VotingEscrow.abi, HttpProvider);
export const PPIContract = new Contract('0x22f41abf77905f50df398f21213290597e7414dd', ERC20ABI, HttpProvider);
