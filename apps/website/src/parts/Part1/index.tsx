import Avocado from '@assets/Part1/Avocado.png';
import './index.css';

function Part1() {
    return (
        <div un-position="relative" un-pt="120px" lt-mobile-pt="32px" lt-mobile-text="center">
            <h1 text="75px #184B4F" font="normal" un-leading="125%" lt-mobile-text="37rem">
                Enter a New World
                <br />
                of Digital Trade
            </h1>

            <img
                un-position="absolute"
                un-right="-120px"
                un-top="-100px"
                w="744px"
                h="864px"
                z="-1"
                lt-mobile-position="relative"
                lt-mobile-w="340rem"
                lt-mobile-h="394rem"
                lt-mobile-right="unset"
                lt-mobile-top="unset"
                src={Avocado}
                alt="avocado background image"
            />

            <p
                un-mt="66px"
                un-mb="26px"
                text="30px #2A3D4A"
                un-leading="41px"
                mobile-w="511px"
                lt-mobile-text="18rem"
                lt-mobile-leading="22rem"
                lt-mobile-mt="24rem"
                lt-mobile-px="32rem"
            >
                Making blockchain world truly reach the hearts and minds of people.
            </p>

            <a
                className="shadow-black"
                display="block"
                w="266px"
                h="72px"
                text="center"
                un-leading="72px"
                un-text="25px #184B4F"
                font="bold"
                bg="#F9FCFD"
                border="~ 1px #184B4F"
                un-rounded="200px"
                lt-mobile-mx="auto"
                lt-mobile-w="196rem"
                lt-mobile-h="54rem"
                lt-mobile-leading="54rem"
                lt-mobile-text="18rem"
                lt-mobile-bg="#EBF4FF"
                lt-mobile-rounded="200rem"
                href="https://swappi.io/#/swap"
                target="_blank"
                rel="noopener noreferrer"
            >
                Launch App
            </a>
        </div>
    );
}

export default Part1;
