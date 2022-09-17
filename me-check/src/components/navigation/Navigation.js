import './navigation.css';
import userLogo from "./Group 2.png";

function Navigation() {
    return(
        <div className = "navbar-container">
            <div className = "logo">
                <span>Me +</span> Check
            </div>

            <div className = "user-icon">
                <img src = {userLogo} />
            </div>
        </div>
    );
}

export default Navigation;