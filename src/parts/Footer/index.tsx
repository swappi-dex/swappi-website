import useSWR from 'swr';
import { fetchCurrentEpochNumber } from '@utils/fetch';
import Swappi from '@assets/Navbar/swappi.png';
import CERTIK from '@assets/Footer/CERTIK.png';
import './index.css';

function Footer() {
    return (
        <>
            <div className="footer-upper">
                <img
                    src={Swappi}
                    alt="swappi logo"
                    draggable={false}
                    display="block"
                    flex="shrink-0 grow-0"
                    w="244px"
                    h="110px"
                    mobile-translate="x-[-32px]"
                    lt-mobile-w="181rem"
                    lt-mobile-h="82rem"
                    lt-mobile-ml="32rem"
                />

                <p un-m="t-28px b-10px" text="20px" font="bold" lt-mobile-m="t-24rem b-10rem" lt-mobile-p="l-56rem">
                    Menu
                </p>
                <div
                    className="footer-menu"
                    display="grid"
                    un-items="center"
                    grid-rows="5"
                    grid-cols="2"
                    w="300px"
                    text="18px"
                    un-leading="32px"
                    lt-mobile-p="l-56rem"
                    lt-mobile-text="15rem"
                    lt-mobile-leading="36rem"
                >
                    <a href="https://docs.swappi.io/swappi/" target="_blank" rel="noopener noreferrer">
                        Documentation
                    </a>
                    <a href="https://info.swappi.io/" target="_blank" rel="noopener noreferrer">
                        Analytics
                    </a>
                    <a href="https://forms.gle/xjpxQhrqPFnG2ybSA" target="_blank" rel="noopener noreferrer">
                        Token listing
                    </a>
                    <a href="https://app.swappi.io/#/farming" target="_blank" rel="noopener noreferrer">
                        Farming
                    </a>
                    <a href="https://forms.gle/xjpxQhrqPFnG2ybSA" target="_blank" rel="noopener noreferrer">
                        Apply for Farm
                    </a>
                    <a href="https://app.swappi.io/#/launchpad" target="_blank" rel="noopener noreferrer">
                        LaunchPad
                    </a>
                    <a href="https://immunefi.com/bounty/swappi/" target="_blank" rel="noopener noreferrer">
                        Bug Bounty
                    </a>
                    <a href="https://app.swappi.io/#/lottery" target="_blank" rel="noopener noreferrer">
                        Lottery
                    </a>
                </div>

                <div un-position="absolute" un-bottom="46px" un-right="0" lt-mobile-display="none">
                    <p un-m="b-2px" text="20px" font="bold">
                        Social Media
                    </p>
                    <SocialMedia />
                </div>
            </div>

            <FooterUnder />
        </>
    );
}

export function FooterUnder({ inNavbar }: { inNavbar?: boolean }) {
    const { data: currentEpochNumber } = useSWR('currentEpochNumber', fetchCurrentEpochNumber, { refreshInterval: 2222 });

    return (
        <div className={'footer-under' + (inNavbar ? ' footer-under--nav' : '')}>
            <SocialMedia className="mobile:display-none lt-mobile:display-flex justify-center mb-16rem" />
            <div
                display="flex"
                justify="between"
                un-items="center"
                w="full"
                mobile-h="full"
                text="15px #163B56"
                lt-mobile-text="15rem"
                lt-mobile-justify="end"
                lt-mobile-flex="col-reverse"
                lt-mobile-gap="12rem"
            >
                <div display="flex" flex="col" gap="12px">
                    {inNavbar && <SocialMedia className="lt-mobile:display-none" />}
                    <div display="flex" un-items="center">
                        Audit by
                        <img un-ml="16px" w="86px" h="22px" src={CERTIK} alt="CERTIK logo" />
                    </div>
                </div>

                <div display="flex" flex="col" lt-mobile-display={inNavbar ? 'none' : 'flex'}>
                    2022 Swappi. All rights reserved
                    <div
                        display="flex"
                        un-items="center"
                        justify="end"
                        un-leading="24px"
                        lt-mobile-flex="row-reverse"
                        lt-mobile-justify="center"
                        lt-mobile-leading="32rem"
                    >
                        <span translate-y=".5px" lt-mobile-translate="y-1.5rem">
                            {currentEpochNumber ?? '--'}
                        </span>
                        <div
                            className="animate-ping"
                            un-ml="8px"
                            w="8px"
                            h="8px"
                            un-rounded="full"
                            bg="#B6DD76"
                            lt-mobile-w="8rem"
                            lt-mobile-h="8rem"
                            lt-mobile-mr="12rem"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialMedia({ className }: { className?: string }) {
    return (
        <div className={'footer-socialMedia ' + className} display="flex" un-items="center" gap="13px" lt-mobile-gap="18rem">
            <a text="32px" lt-mobile-text="32rem" href="https://github.com/swappidex" target="_blank" rel="noopener noreferrer">
                <span className="i-akar-icons:github-fill" bg="#184B4F" />
            </a>
            <a text="34.5px" lt-mobile-text="34.5rem" href="https://t.me/Swappi_DEX" target="_blank" rel="noopener noreferrer">
                <span className="i-cib:telegram" bg="#184B4F" />
            </a>
            <a text="38px" lt-mobile-text="38rem" href="https://twitter.com/SwappiDEX" target="_blank" rel="noopener noreferrer">
                <span className="i-ant-design:twitter-circle-filled" bg="#184B4F" />
            </a>
            <a text="38.5px" lt-mobile-text="38.5rem" href="https://www.reddit.com/r/Swappi/" target="_blank" rel="noopener noreferrer">
                <span className="i-ant-design:reddit-circle-filled" bg="#184B4F" />
            </a>
            <a
                text="26px center"
                w="34px"
                h="34px"
                un-leading="34px"
                un-rounded="full"
                bg="#184B4F"
                un-translate="y-1px"
                lt-mobile-text="26rem"
                lt-mobile-w="34rem"
                lt-mobile-h="34rem"
                lt-mobile-leading="34rem"
                href="https://medium.com/@swappidex"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="i-bi:medium" bg="white" lt-mobile-bg="#F7FFDF" />
            </a>
        </div>
    );
}
export default Footer;
