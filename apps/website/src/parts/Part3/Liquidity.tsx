function Liquidity() {
    return (
        <div className="feature shadow-blue">
            <div text="#184B4F">
                <div className="shadow-green" p="l-24px r-12px y-13px" border="1px #B6DD76" bg="#F9FCFD" un-rounded="20px">
                    <p text="20px" un-leading="20px" lt-mobile-text="15rem" lt-mobile-leading="15rem">
                        Token A
                    </p>
                    <p un-mt="12px" text="40px" un-leading="40px" font="bold" lt-mobile-text="35rem" lt-mobile-leading="35rem">
                        0.0
                    </p>
                    <p text="12px right" un-leading="0" lt-mobile-text="10rem" un-mt="-4px" lt-mobile-mt="-4rem">
                        CFX
                        <span className="i-dashicons:arrow-down-alt2" un-ml="8px" lt-mobile-ml="8rem"/>
                    </p>
                </div>

                <div
                    un-mx="auto"
                    w="56px"
                    h="56px"
                    un-leading="56px"
                    border="1px #B6DD76"
                    bg="#F9FCFD"
                    un-rounded="20px"
                    un-my="-15px"
                    text="center"
                    transform="translate-x-0"
                    lt-mobile-w="44rem"
                    lt-mobile-h="44rem"
                    lt-mobile-leading="44rem"
                    lt-mobile-my="-14rem"
                    lt-mobile-rounded="20rem"
                >
                    <span className="i-fluent:add-24-filled" text="40px" lt-mobile-text="28rem" />
                </div>

                <div className="shadow-green" p="l-24px r-12px y-13px" border="1px #B6DD76" bg="#F9FCFD" un-rounded="20px">
                    <p text="20px" un-leading="20px" lt-mobile-text="15rem" lt-mobile-leading="15rem">
                        Token B
                    </p>
                    <p un-mt="12px" text="40px" un-leading="40px" font="bold" lt-mobile-text="35rem" lt-mobile-leading="35rem">
                        0.0
                    </p>
                    <p text="12px right" un-leading="0" lt-mobile-text="10rem" un-mt="-4px" lt-mobile-mt="-4rem">
                        Select a token
                        <span className="i-dashicons:arrow-down-alt2" un-ml="8px" lt-mobile-ml="8rem" />
                    </p>
                </div>
            </div>

            <div className="feature-navArea">
                <p>Liquidity</p>

                <div>
                    <p>Add liquidity to earn exchange fees</p>
                    <a className="shadow-black" href="https://swappi.io/#/pool/v2" rel="noopener noreferrer">Add</a>
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
                transform="translate-x-[-30px]"
            />
        </div>
    );
}

export default Liquidity;
