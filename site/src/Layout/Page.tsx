import Main from '../Components/Main';
import Navbar from '../Components/Navbar';
import './Styling.css';

const Page: React.FC = ({}) => {
    
    return (
    <div className="header-mainpage-bkg">
        <div>
            <Navbar />
        </div>
        <div>
            {/* //main section (rename home to main) */}
            <br/>       
            <br/>  
            <Main />
        </div>
    </div>);
}
export default Page;