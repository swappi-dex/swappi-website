import { Unit } from '@cfxjs/use-wallet-react/ethereum';
import { defaultAbiCoder } from '@ethersproject/abi';
import { formatUnits } from '@ethersproject/units';
import { FactoryContract, PairContract, MulticallContract, PPIContract, VotingEscrowContract } from '../contracts';

const getPairAmount = async ({ tokenA, tokenB, pairAddr }: any) => {
    const defaultVal = {
        amountA: 0,
        amountB: 0,
    };

    try {
        if (!pairAddr) {
            const pairCallData = FactoryContract.interface.encodeFunctionData('getPair', [tokenA.address, tokenB.address]);
            const re = await MulticallContract.callStatic.aggregate([['0xe2a6f7c0ce4d5d300f97aa7e125455f5cd3342f5', pairCallData]]);

            const [addr] = defaultAbiCoder.decode(['address'], re.returnData[0]);
            pairAddr = addr;
        }

        const token0CallData = PairContract.interface.encodeFunctionData('token0');
        const getReservesCallData = PairContract.interface.encodeFunctionData('getReserves');
        const re1 = await MulticallContract?.callStatic.aggregate([
            [pairAddr, token0CallData],
            [pairAddr, getReservesCallData],
        ]);

        const [token0] = defaultAbiCoder.decode(['address'], re1.returnData[0]);
        const shouldReverse = tokenA.address.toLowerCase() !== token0.toLowerCase();
        const [_reserve0, _reserve1] = defaultAbiCoder.decode(['uint256', 'uint256', 'uint256'], re1.returnData[1]);

        const amountA = (shouldReverse ? +formatUnits(_reserve1, tokenA.decimals) : +formatUnits(_reserve0, tokenA.decimals)) || 0;
        const amountB = (shouldReverse ? +formatUnits(_reserve0, tokenB.decimals) : +formatUnits(_reserve1, tokenB.decimals)) || 0;

        return { amountA, amountB };
    } catch (error) {
        console.log(error);
        return defaultVal;
    }
};

const getPairPrice = async ({ tokenA, tokenB, pairAddr }: any) => {
    try {
        const { amountA, amountB } = await getPairAmount({
            tokenA,
            tokenB,
            pairAddr,
        });
        if (!amountA || amountA <= 0 || !amountB || amountB <= 0) return 0;

        return amountA / amountB;
    } catch (error) {
        console.log(error);
        return 0;
    }
};

export const fetchPPIPrice = () =>
    getPairPrice({
        tokenA: {
            decimals: 18,
            symbol: 'USDT',
            name: 'Tether USD',
            address: '0xfe97E85d13ABD9c1c33384E796F10B73905637cE',
        },
        tokenB: {
            decimals: 18,
            symbol: 'PPI',
            name: 'Swappi Token',
            address: '0x22F41aBf77905f50dF398f21213290597e7414Dd',
        },
    });


const SECONDS_PER_WEEK = Unit.fromMinUnit(86400 * 7);
const SECONDS_PER_MONTH = Unit.fromMinUnit(86400 * 30);
export const fetchStakingInfo = () =>
    Promise.all([
        PPIContract.totalSupply(),
        VotingEscrowContract.totalSupply(),
        VotingEscrowContract.maxTime(),
        PPIContract.balanceOf('0xf270e44105c1270bc7a4ffedbcb699486ada7a6a'),
    ]).then(([_totalSupply, _vePPITotalSupply, _maxTime, _totalLocked]) => {
        const totalLocked = Unit.fromMinUnit(_totalLocked._hex);
        const totalSupply = Unit.fromMinUnit(_totalSupply._hex);
        const vePPITotalSupply = Unit.fromMinUnit(_vePPITotalSupply._hex);
        const maxTime = Unit.fromMinUnit(_maxTime._hex);
        const circulatingRatio = Number(totalLocked.div(totalSupply).mul(Unit.fromMinUnit(100)).toDecimalMinUnit()).toFixed(2) + '%';

        const avgValue = vePPITotalSupply.mul(maxTime).div(totalLocked);
        let avgDuration: string;
        if (avgValue.greaterThan(SECONDS_PER_MONTH)) avgDuration = `${Number(avgValue.div(SECONDS_PER_MONTH).toDecimalStandardUnit(3)).toFixed(2)} months`;
        else avgDuration = `${Number(avgValue.div(SECONDS_PER_WEEK).toDecimalStandardUnit(3)).toFixed(2)} weeks`;
        
        return {
            totalLocked,
            totalSupply,
            vePPITotalSupply,
            maxTime,
            circulatingRatio,
            avgDuration,
        };
    });
