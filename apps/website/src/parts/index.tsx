import CustomScrollbar from 'custom-react-scrollbar';
import Navbar from './Navbar';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Footer from './Footer';
import './index.css';

function Website() {
    return (
        <CustomScrollbar className="main-scroller">
            <div className='main'>
                <Navbar />
                <Part1 />
                <Part2 />
                <Part3 />
                <Footer />
            </div>
        </CustomScrollbar>
    );
}

export default Website;
