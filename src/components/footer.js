import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/408broncos" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" className="icon" /></a>
                <a href="https://www.linkedin.com/in/priya-ravi-4508437b/" target="_blank"><img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png" alt="LinkedIn" className="icon" /></a>
            </div>
            <p className='footer-info'>
                &copy; Jordan Cardenas  |  Made by <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
            </p>

        </div>
    )
}

export default Footer;