import swappi from '@assets/Navbar/swappi.png';
import swappi_mobile from '@assets/Navbar/swappi_mobile.png';
import { FooterUnder } from '../Footer';

function Dropdown({ onClickClose }: { onClickClose: VoidFunction }) {
    return (
        <div className="dropdown">
            <div>
                <header className="flex items-center mobile:pt-40px mobile-pb-20px lt-mobile:h-104rem lt-mobile:bg-#EBF4FF">
                    <picture un-mr="auto">
                        <source media="(max-width: 460px)" srcSet={swappi_mobile} />
                        <img
                            className="w-198px h-74px mobile:-translate-x-20px lt-mobile:w-94rem lt-mobile:h-94rem lt-mobile:ml-12rem"
                            src={swappi}
                            alt="swappi logo"
                            draggable={false}
                        />
                    </picture>

                    <div className="i-line-md:close-circle" text="24px" lt-mobile-text="30rem" lt-mobile-mr="40rem" cursor="pointer" onClick={onClickClose} />
                </header>

                <div className="dropdown-navlink">
                    <a href="https://www.fluentwallet.com/" target="_blank" rel="noopener noreferrer">
                        Wallet
                    </a>
                    <a href="https://info.swappi.io/" target="_blank" rel="noopener noreferrer">
                        Analytics
                    </a>
                    <a href="https://app.swappi.io/#/farming" target="_blank" rel="noopener noreferrer">
                        Farming
                    </a>
                    <a href="https://app.swappi.io/#/launchpad" target="_blank" rel="noopener noreferrer">
                        LaunchPad
                    </a>
                    <a href="https://app.swappi.io/#/lottery" target="_blank" rel="noopener noreferrer">
                        Lottery
                    </a>
                </div>
            </div>

            <FooterUnder inNavbar />
        </div>
    );
}

export default Dropdown;
