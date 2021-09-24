import React, { useState } from 'react';
import "./Navbar.css";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Button } from './Button';


function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);



    
    return (
        <div className="navbar">

            <div className="navbar_container container">

                <Link to="/" className='navbar_logo' onClick={closeMobileMenu}>
                    <HomeIcon className="navbar_icon" fontSize="large" />
                </Link>

                <div className="menu_icon" onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav_menu active' : 'nav_menu'}>

                  <li className='nav_item'>
                      <Link to="/about" className='nav_links' onClick={closeMobileMenu}>
                         About
                      </Link>
                  </li>

                  <li className='nav_item'>
                      <Link to="/workexperience" className='nav_links' onClick={closeMobileMenu}>
                          Work Experience
                      </Link>
                  </li>

                  <li className='nav_item'>
                      <Link to="/education" className='nav_links' onClick={closeMobileMenu}>
                          Education
                      </Link>
                  </li>

                  <li className='nav_item'>
                      <Link to="/skill" className='nav_links' onClick={closeMobileMenu}>
                          Skill
                      </Link>
                  </li>

                  <li className='nav_item'>
                      <Link to="/project" className='nav_links' onClick={closeMobileMenu}>
                          Project
                      </Link>
                  </li>

                  <li className='nav_btn'>
                      {button ? (
                        <Link to="/singin" className='btn_link'>
                            <Button buttonStyle="btn_outline">SingUp</Button>
                        </Link>
                      ) : (
                        <Link to="/singin" className='btn_link'>
                            <Button buttonStyle="btn_outline"
                            buttonSize="btn_mobile" onClick={closeMobileMenu}>SingUp</Button>
                        </Link>
                      )}
                      
                  </li>

                </ul> 

            </div>
            
        </div>
    );
}

export default Navbar;
