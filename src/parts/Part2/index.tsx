import useSWR from 'swr';
import { Unit } from '@cfxjs/use-wallet-react/ethereum';
import { fetchFactories, fetchPPIPrice, fetchStakingInfo } from '@utils/fetch';
import { numberWithCommas } from '@utils/numFormat';
import './index.css';

function Part2() {
    const { data: factories } = useSWR('factories', fetchFactories, { refreshInterval: 5000 });
    const { data: ppiPrice } = useSWR('ppiPrice', fetchPPIPrice);
    const { data: stakingInfo } = useSWR('stakingInfo', fetchStakingInfo);
    const marketCap = ppiPrice && stakingInfo ? Unit.fromMinUnit(ppiPrice).mul(stakingInfo.totalSupply).toDecimalStandardUnit(2) : undefined;

    return (
        <div un-mt="316px" un-mb="64px" lt-mobile-px="32rem" lt-mobile-mt="64rem" lt-mobile-mb="48rem">
            <div className="flex items-center justify-between mb-24px" lt-mobile-justify="center" lt-mobile-mb="20rem">
                <h2 text="45px #184B4F" font="normal" lt-mobile-text="37rem center" lt-mobile-w="200rem">
                    Overview
                </h2>

                <a text="20px #184B4F" className="group" lt-mobile-display="none" href="https://info.swappi.io/" target="_blank" rel="noopener noreferrer">
                    Go to Analytics
                    <span className="i-akar-icons:arrow-right group-hover:translate-x-6px transition-transform" text="16px" un-ml="6px" />
                </a>
            </div>

            <div
                className="shadow-blue"
                display="flex"
                justify="evenly"
                un-position="relative"
                p="x-18px y-42px"
                un-rounded="20px"
                border="1px #AAD0FF"
                bg="white"
                text="center #184B4F"
                lt-mobile-flex="col"
                lt-mobile-p="x-18rem y-0"
                lt-mobile-h="288rem"
            >
                <div>
                    <p className="part2-textShadow" text="43px" un-leading="113.5%" lt-mobile-text="18rem">
                        {factories?.totalLiquidityUSD ? `$${numberWithCommas(Number(factories.totalLiquidityUSD).toFixed(2))}` : '--'}
                    </p>
                    <p text="14px" un-leading="14px" lt-mobile-text="12rem" lt-mobile-leading="14rem" lt-mobile-mt="12rem">
                        Total Liquidity
                    </p>
                </div>

                <div h="2px" bg="#184b4f30" />

                <div>
                    <p className="part2-textShadow" text="43px" un-leading="113.5%" lt-mobile-text="18rem">
                        {factories?.totalVolumeUSD ? `$${numberWithCommas(Number(factories.totalVolumeUSD).toFixed(2))}` : '--'}
                    </p>
                    <p text="14px" un-leading="14px" lt-mobile-text="12rem" lt-mobile-leading="14rem" lt-mobile-mt="12rem">
                        Volume
                    </p>
                </div>

                <div h="2px" bg="#184b4f30" />

                <div>
                    <p className="part2-textShadow" text="43px" un-leading="113.5%" lt-mobile-text="18rem">
                        {marketCap ? `$${numberWithCommas(marketCap)}` : '--'}
                    </p>
                    <p text="14px" un-leading="14px" lt-mobile-text="12rem" lt-mobile-leading="14rem" lt-mobile-mt="12rem">
                        $PPI Market Cap
                    </p>
                </div>
            </div>

            <a
                className="shadow-black"
                display="none"
                lt-mobile-display="block"
                lt-mobile-m="x-auto t-32rem"
                lt-mobile-w="196rem"
                lt-mobile-h="54rem"
                lt-mobile-leading="54rem"
                lt-mobile-border="~ 1px #184B4F"
                lt-mobile-text="18rem #184B4F center"
                lt-mobile-bg="#EBF4FF"
                lt-mobile-font="bold"
                lt-mobile-rounded="200rem"
                href="https://info.swappi.io/" target="_blank" rel="noopener noreferrer"
            >
                Analytics
            </a>
        </div>
    );
}

export default Part2;
