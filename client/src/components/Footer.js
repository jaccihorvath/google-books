import React from 'react';
import logo from '../assets/book-01.png';


const styles = {
    footer: {
        backgroundColor:"white",
        flexShrink:"none"
    },
    logo: {
        height: 75,
        width: 75
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 5
    }
}

const Footer = () => (
    <footer
        id="sticky-footer"
        className="py-4 bg-light text-black-50 "
        style={styles.footer}>
        
        <div className="container text-center justify-content-center">
            <img
                src={logo}
                alt="book"
                loading="lazy"
                style={styles.logo} />
            
            <br />
            
            <small>
                Copyright &copy; Jacci Horvath
            </small> <br />



        </div>
    </footer>
    
        
);

export default Footer;