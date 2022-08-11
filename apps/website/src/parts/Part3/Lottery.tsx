function Lottery() {
    return (
        <div className="feature shadow-blue">
            <div display="flex" flex="col" gap="24px" text="#184B4F" lt-mobile-gap="24rem" un-pt="20px" lt-mobile-pt="20rem">
                <div display="flex" gap="24px" un-pl="45px" lt-mobile-gap="20rem" lt-mobile-pl="38rem">
                    <span className="lottery-ball" after-border="#71A957">
                        8
                    </span>
                    <span className="lottery-ball" after-border="#EBA337">
                        3
                    </span>
                    <span className="lottery-ball" after-border="#EEDA71">
                        2
                    </span>
                    <span className="lottery-ball" after-border="#5BD1A7">
                        7
                    </span>
                    <span className="lottery-ball" after-border="#8B9EE1">
                        9
                    </span>
                    <span className="lottery-ball" after-border="#B65FAD">
                        4
                    </span>
                </div>
                <div
                    display="flex"
                    gap="29px"
                    un-pl="48px"
                    text="25px"
                    h="36px"
                    un-leading="36px"
                    lt-mobile-text="20rem"
                    lt-mobile-h="30rem"
                    lt-mobile-leading="30rem"
                    lt-mobile-gap="25rem"
                    lt-mobile-pl="40rem"
                >
                    <span>8</span>
                    <span>3</span>
                    <span>2</span>
                    <span>7</span>
                    <span>9</span>
                    <span>4</span>
                </div>
                <div
                    display="flex"
                    un-items="center"
                    text="25px"
                    h="36px"
                    un-leading="36px"
                    lt-mobile-text="20rem"
                    lt-mobile-h="30rem"
                    lt-mobile-leading="30rem"
                >
                    <div text="30px" font="bold" un-mr="14px" lt-mobile-text="25rem" lt-mobile-mr="12rem">
                        A
                    </div>
                    <div
                        className="shadow-green"
                        display="flex"
                        un-items="center"
                        gap="28px"
                        un-px="14px"
                        un-rounded="100px"
                        border="2px #B6DD76"
                        bg="#F9FCFD"
                        lt-mobile-px="12rem"
                        lt-mobile-gap="24rem"
                    >
                        <span>8</span>
                        <span>3</span>
                        <span>2</span>
                    </div>
                    <span un-ml="14px" lt-mobile-ml="12rem">
                        5
                    </span>
                    <span un-ml="28px" lt-mobile-ml="24rem">
                        9
                    </span>
                    <span un-ml="28px" lt-mobile-ml="24rem">
                        4
                    </span>
                </div>
                <div
                    display="flex"
                    un-items="center"
                    text="25px"
                    h="36px"
                    un-leading="36px"
                    lt-mobile-text="20rem"
                    lt-mobile-h="30rem"
                    lt-mobile-leading="30rem"
                >
                    <div text="30px" font="bold" un-mr="14px" lt-mobile-text="25rem" lt-mobile-mr="12rem">
                        B
                    </div>
                    <div
                        className="shadow-green"
                        display="flex"
                        un-items="center"
                        gap="28px"
                        un-px="14px"
                        un-rounded="100px"
                        border="2px #B6DD76"
                        bg="#F9FCFD"
                        lt-mobile-px="12rem"
                        lt-mobile-gap="24.5rem"
                    >
                        <span>1</span>
                        <span>3</span>
                        <span>2</span>
                        <span>7</span>
                        <span>9</span>
                        <span>4</span>
                    </div>
                </div>
            </div>

            <div className="feature-navArea">
                <p>Lottery</p>

                <div>
                    <p>Buy tickets to win big prize</p>
                    <a className="shadow-black" href="https://swappi.io/#/lottery" rel="noopener noreferrer">Get Tickets</a>
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
                transform="translate-x-[36px]"
            />
        </div>
    );
}

export default Lottery;
