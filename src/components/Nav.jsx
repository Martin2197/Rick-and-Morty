import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';


export default function Nav({ onSearch }) {
    return(
        <div> 
            <Link to="/home">
                <button>Home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}