import Exchange from './Exchange';
import Liquidity from './Liquidity';
import Farming from './Farming';
import Staking from './Staking';
import Lottery from './Lottery';
import ViewAllBg from '@assets/Part3/ViewAll_bg.png';
import './index.css';

function Part3() {
    return (
        <div un-position="relative" un-mt="120px" lt-mobile-px="32rem" lt-mobile-mt="64rem" overflow="hidden" lt-mobile-overflow="visible">
            <div className="flex items-center justify-between mb-24px" lt-mobile-justify="center" lt-mobile-mb="20rem">
                <h2 text="45px #184B4F" font="normal" lt-mobile-text="37rem center" lt-mobile-w="200rem">
                    Our Features
                </h2>
            </div>

            <div
                className="swiper"
                display="flex"
                flex="wrap"
                gap="32px"
                lt-mobile-flex="nowrap"
                lt-mobile-overflow="x-scroll"
                lt-mobile-pb="48px"
                lt-mobile-w="306rem"
                lt-mobile-m="x-auto"
                lt-mobile-gap="32rem"
            >
                <Exchange />
                <Liquidity />
                <Farming />
                <Staking />
                <Lottery />
            </div>

            <div display="none" lt-mobile-display="flex" justify="center" un-items="center" gap="8px" transform="translate-y-[-20px]" h="16px">
                <div w="14px" h="14px" un-rounded="full" bg="#184B4F" opacity="50" />
                <div w="14px" h="14px" un-rounded="full" bg="#184B4F" opacity="50" />
                <div w="14px" h="14px" un-rounded="full" bg="#184B4F" opacity="50" />
                <div w="14px" h="14px" un-rounded="full" bg="#184B4F" opacity="50" />
                <div w="14px" h="14px" un-rounded="full" bg="#184B4F" opacity="50" />
            </div>

            <a
                className="shadow-black"
                display="block"
                w="266px"
                h="72px"
                un-leading="72px"
                un-m="x-auto t-120px b-184px"
                border="1px #184B4F"
                font="bold"
                un-rounded="100px"
                bg="#F9FCFD"
                text="25px #184B4F center"
                lt-mobile-m="x-auto t-14rem b-0"
                lt-mobile-w="196rem"
                lt-mobile-h="54rem"
                lt-mobile-leading="54rem"
                lt-mobile-text="18rem"
                lt-mobile-bg="#EBF4FF"
                href="https://app.swappi.io/#/swap"
                target="_blank"
                rel="noopener noreferrer"
            >
                Launch App
            </a>

            <picture un-position="absolute" w="648px" h="715px" un-left="-100px" un-bottom="-316px" lt-mobile-display="none">
                <source media="(min-width: 461px)" srcSet={ViewAllBg} />
                <img w="full" h="full" alt="swappi bg" draggable={false} />
            </picture>
        </div>
    );
}

export default Part3;
