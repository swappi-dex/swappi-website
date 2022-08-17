import React, { useCallback, useEffect } from 'react';
import swappi from '@assets/Navbar/swappi.png';
import swappi_mobile from '@assets/Navbar/swappi_mobile.png';
import Dropdown from './Dropdown';
import './index.css';

let mainScroller: HTMLElement | null = null;
function Navbar() {
    const [open, _setOpen] = React.useState(false);
    const setOpen = useCallback((isOpen: boolean) => {
        _setOpen(isOpen);
        if (!mainScroller) return;
        if (isOpen) {
            mainScroller.style.overflow = 'hidden';
            mainScroller.scrollTo({ top: 0 });
        } else {
            mainScroller.style.overflow = 'auto';
        }
    }, []);

    useEffect(() => {
        mainScroller = document.querySelector('.main-scroller');
        function onKeyDown(evt: KeyboardEvent) {
            if (evt.keyCode === 27) {
                setOpen(false);
            }
        }

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
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

            <a
                un-mr="56px"
                text="15px #184B4F"
                font="bold"
                lt-mobile-display="none"
                href="https://app.swappi.io/#/swap"
                target="_blank"
                rel="noopener noreferrer"
            >
                Launch App
            </a>
            <div className="i-charm:menu-hamburger" text="24px" lt-mobile-text="30rem" lt-mobile-mr="40rem" cursor="pointer" onClick={() => setOpen(true)} />
            {open && <Dropdown onClickClose={() => setOpen(false)} />}
        </header>
    );
}

export default Navbar;
