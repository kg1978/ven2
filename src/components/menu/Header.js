import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import AuthService from '../../services/Auth.service';
import LocalStoreHandler from '../../common/LocalStoreHandler';

const Header = () => {
    const token = LocalStoreHandler.getUserToken();

    return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        <Navbar />
        {token && (
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link" onClick={AuthService.logout}>
                        LogOut
                    </a>
                </li>
            </div>
        )}
      </div>

    </header>
  );
};

export default Header;
