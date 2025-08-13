import './Components.css';

const Navbar: React.FC = ({ }) => {
    return(
    <div className='navbar-style'>
        <ul>
            <li><a href=''>about</a></li>
            <li><a href=''>projects</a></li>
            <li><a href=''>idea_dump</a></li>
        </ul>
    </div>)
};

export default Navbar;