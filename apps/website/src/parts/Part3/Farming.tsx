import useSWR from 'swr';
import { fetchPPIRewardToday, fetchPPIPrice } from '@utils/fetch';
import { Unit } from '@cfxjs/use-wallet-react/ethereum';

function Farming() {
    const { data: ppiRewardToday } = useSWR('ppiRewardToday', fetchPPIRewardToday, { refreshInterval: 5000 });
    const { data: ppiPrice } = useSWR('ppiPrice', fetchPPIPrice, { refreshInterval: 5000 });
    const totalRewardsToday = ppiPrice && ppiRewardToday ? Number(Unit.fromMinUnit(ppiPrice).mul(ppiRewardToday).toDecimalStandardUnit(3)).toFixed(2) : undefined;
    
    return (
        <div className="feature shadow-blue">
            <div text="#184B4F" un-pt="16px" lt-mobile-pt="16rem">
                <p text="38px" un-leading="40px" un-pl="8rem" lt-mobile-text="35rem" lt-mobile-leading="40rem">
                    Total Rewards for Today:
                </p>
                <div un-my="40px" h="1px" bg="#184b4f" opacity="30" select="none" lt-mobile-my="36rem" />
                <p text="40px" un-leading="40px" un-pl="8rem" font="bold" lt-mobile-text="35rem" lt-mobile-leading="40rem">
                    {totalRewardsToday ? `$${totalRewardsToday}` : '--'}
                </p>
            </div>

            <div className="feature-navArea">
                <p>Farming</p>

                <div>
                    <p>Stake LP tokens to earn $PPI</p>
                    <a className="shadow-black" href="https://swappi.io/#/farming" rel="noopener noreferrer">Farming</a>
                </div>
            </div>

            <div
                display="none"
                lt-mobile-display="block"
                w="15px"
                h="15px"
                un-rounded="full"
                bg="#3B5A5C"
                un-position="absolute"
                un-bottom="-44.5px"
                un-left="50%"
                transform="translate-x-[-8px]"
            />
        </div>
    );
}

export default Farming;
