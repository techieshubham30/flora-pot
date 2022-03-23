import './footer.css';
const Footer=()=>{
    return(
     <footer className="footer">
        <div className="footer-header">
            Made by Shubham Singh
        </div>
        <ul className="social-icons">
            <li className="footer-list-item">
                <a href="https://github.com/techieshubham30" className="github-link">
                    <i className="fab fa-github fa-lg"></i>
                </a>

            </li>
            <li className="footer-list-item">
                <a href="https://twitter.com/shubhamsingh088" className="twitter">
                    <i className="fab fa-twitter fa-lg"></i>
                </a>

            </li>
            <li className="footer-list-item">
                <a href="https://www.linkedin.com/in/techieshubham/" className="linkedin-link">
                    <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
            </li>
        </ul>
        <div className="footer-copy">
            © 2022 Flora Designs
        </div>
    </footer>
    );
}

export {Footer};