import fetchChain from './fetchChain';
import { client } from './apollo/client';
import { GLOBAL_DATA, TOKEN_DATA } from './apollo/queries';
import { PPIRateContract } from '../contracts';
import { Unit } from '@cfxjs/use-wallet-react/ethereum';

export const coreNetwork = {
    chainId: '1029',
    chainName: 'Conflux Hydra',
    rpcUrls: ['https://main.confluxrpc.com'],
    blockExplorerUrls: ['https://confluxscan.net'],
    nativeCurrency: {
        name: 'Conflux',
        symbol: 'CFX',
        decimals: 18,
    },
} as const;

export const eSpaceNetwork = {
    chainId: '1030',
    chainName: 'Conflux eSpace',
    rpcUrls: ['https://evm.confluxrpc.com'],
    blockExplorerUrls: ['https://evm.confluxscan.net'],
    nativeCurrency: {
        name: 'Conflux',
        symbol: 'CFX',
        decimals: 18,
    },
} as const;

export const fetchCurrentEpochNumber = () =>
    fetchChain({
        rpcUrl: coreNetwork.rpcUrls[0],
        method: 'cfx_getStatus',
    }).then((res: { epochNumber: string }) => {
        if (typeof res?.epochNumber === 'string') {
            return Number(res?.epochNumber);
        }
        throw new Error('Failed to fetch block number');
    });

export const fetchFactories = () =>
    client
        .query({
            query: GLOBAL_DATA(),
            fetchPolicy: 'cache-first',
        })
        .then((res) => res?.data?.uniswapFactories?.[0]);

export const fetchPPIData = () =>
    client
        .query({
            query: TOKEN_DATA('0x22f41abf77905f50df398f21213290597e7414dd'),
            fetchPolicy: 'cache-first',
        })
        .then((res) => res?.data?.tokens?.[0]);

const oneDaySecond = Unit.fromMinUnit((3600 * 24) / 2);
export const fetchPPIRewardToday = () =>
    PPIRateContract.callStatic
        .calculateReward(Math.floor(new Date().getTime() / 1000), Math.floor(new Date().getTime() / 1000) + 1)
        .then((res) => (res?._hex ? Unit.fromMinUnit(res?._hex).mul(oneDaySecond) : undefined));

export { fetchPPIPrice, fetchStakingInfo } from './swappi';
