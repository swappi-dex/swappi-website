import useSWR from 'swr';
import { fetchStakingInfo } from '@utils/fetch';

function Staking() {
    const { data: stakingInfo } = useSWR('stakingInfo', fetchStakingInfo, { refreshInterval: 5000 });
    
    return (
        <div className="feature shadow-blue">
            <div text="#184B4F right" lt-mobile-text="left">
                <p text="35px" un-leading="40px" lt-mobile-text="33rem" lt-mobile-leading="33rem" lt-mobile-px="8rem">
                    Total Staked PPI:
                </p>
                <p un-mt="18px" text="40px" un-leading="40px" font="bold" lt-mobile-text="25rem" lt-mobile-leading="25rem" lt-mobile-px="8rem">
                    {stakingInfo?.totalLocked?.toDecimalStandardUnit(2) ?? '--'}
                </p>


                <div un-my="28px" h="1px" bg="#184b4f" opacity="30" select="none" lt-mobile-my="18rem" />

                <p text="20px" lt-mobile-text="15rem" lt-mobile-px="8rem">Circulating PPI: <span font="bold">{stakingInfo?.circulatingRatio ?? '--'}</span></p>
                <p text="20px" lt-mobile-text="15rem" lt-mobile-px="8rem">Stake Duration: <span font="bold">{stakingInfo?.avgDuration ?? '--'}</span></p>
            </div>

            <div className="feature-navArea">
                <p>Staking</p>

                <div>
                    <p>Stake $PPI to Boost your farming</p>
                    <a className="shadow-black" href="https://swappi.io/#/staking" rel="noopener noreferrer">Staking</a>
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
                transform="translate-x-[14px]"
            />
        </div>
    );
}

export default Staking;
