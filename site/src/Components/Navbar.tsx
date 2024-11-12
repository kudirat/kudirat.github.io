import './Components.css';

const Navbar: React.FC = ({ }) => {
    return(
    <div className='navbar-style'>
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Projects</a></li>
            <li><a href=''>Resume</a></li>
        </ul>
    </div>)
};

export default Navbar;