function Exchange() {
    return (
        <div className="feature shadow-blue">
            <div display="flex" flex="col" gap="8px" lt-mobile-gap="12rem">
                <div display="flex" transform="translate-x-16px">
                    <span className="shadow-green exchange-token">CFX</span>
                </div>

                <div display="flex" justify="end" gap="12px" lt-mobile-gap="12rem">
                    <span className="shadow-green exchange-token">WBTC</span>
                    <span className="shadow-green exchange-token">CFX</span>
                </div>

                <div display="flex" gap="10px" transform="translate-x-[-12px]" lt-mobile-gap="10rem" lt-mobile-transform="translate-x-[-12rem]">
                    <span className="shadow-green exchange-token">USDT</span>
                    <span className="shadow-green exchange-token">MULTI</span>
                </div>

                <div display="flex" justify="center">
                    <span className="shadow-green exchange-token">BNB</span>
                </div>

                <div display="flex" gap="8px" transform="translate-x-12px" lt-mobile-gap="8rem" lt-mobile-transform="translate-x-12rem">
                    <span className="shadow-green exchange-token">PPI</span>
                    <span className="shadow-green exchange-token">ETH</span>
                </div>
            </div>

            <div className="feature-navArea">
                <p>Exchange</p>

                <div>
                    <p>Swap crypto tokens</p>
                    <a className="shadow-black" href="https://app.swappi.io/#/swap" rel="noopener noreferrer">
                        Swap
                    </a>
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
                transform="translate-x-[-52px]"
            />
        </div>
    );
}

export default Exchange;
